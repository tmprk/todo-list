import Project from "./models/project";
import { pubsub } from "./pubsub";
import { storage } from "./storage";
import { removeElementsByClass } from "./utils";
import { dateDiffInDays } from "./utils";

export const projects = {
  filters: ['day', 'week', 'month'],
  sortedTodos: {'day': [], 'week': [], 'month': []},
  render: div => {
    const container = document.createElement('div');
    container.setAttribute('id', 'projects');

    const filters = projects.filters;
    const deadlines = document.createElement('div');
    deadlines.setAttribute('id', 'deadlines');

    // sort todos into the filters
    filters.forEach((duration, index) => {
      const category = document.createElement('div');
      category.setAttribute('id', duration);
      category.className = 'filter';

      const info = document.createElement('div');
      info.className = 'info';

      const title = document.createElement('div');
      title.className = 'projectTitle';
      title.textContent = duration;

      const taskNumber = document.createElement('div');
      taskNumber.className = 'numberOfTasks';
      taskNumber.textContent = '0 items';

      info.appendChild(title);
      info.appendChild(taskNumber);

      category.appendChild(info);

      const dot = document.createElement('div');
      dot.className = 'dot orange';

      category.appendChild(dot);
      category.addEventListener('click', function(e) {
        // projects.sortAll();
        
        // console.log(`clicked ${duration} filter`);
        pubsub.pub('filterTodos', projects.updatedFilterData(e.target.id)); // left off
      })
      deadlines.appendChild(category);
    })
    container.appendChild(deadlines);
    div.appendChild(container);

    projects.sortAll();
    projects.refresh();

    pubsub.sub('projectAdded', projects.create);
    pubsub.sub('updateCount', projects.updateTaskCount);
    pubsub.sub('updateSorted', projects.sortAll);
  },
  renderProject: (projectName, uuid) => {
    const newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.setAttribute('data-id', uuid);

    const projectTitle = document.createElement('div');
    projectTitle.className = 'projectTitle';
    projectTitle.textContent = projectName;

    const numberOfTasks = document.createElement('div');
    numberOfTasks.className = 'numberOfTasks';
    numberOfTasks.textContent = `${storage.todoCount(uuid)} items`;

    newProject.appendChild(projectTitle);
    newProject.appendChild(numberOfTasks);

    // var projectObj = storage.getProject(uuid);
    newProject.addEventListener('click', function(e) {
      pubsub.pub('updateListView', uuid);
    });
    return newProject;
  },
  create: (projectName) => {
    var uuid = Math.random().toString(36).slice(-6);

    // add new project to storage
    const newProjectData = new Project(projectName, []);
    storage.create(uuid, JSON.stringify(newProjectData));
    projects.refresh();

    console.log(`${projectName} was added`);
  },
  refresh: () => {
    removeElementsByClass('project'); // removes all projects in dom
    const allProjects = storage.all();

    if (allProjects.length > 0) {
      var projectsContainer = document.getElementById('projects');
      allProjects.forEach((projectID) => {
        const projectName = storage.getProject(projectID)['title'];
        const projectDiv = projects.renderProject(projectName, projectID)
        projectsContainer.appendChild(projectDiv);
      })
    }

    document.querySelector('.project:last-child').style.borderBottom = '1px solid rgb(174, 174, 174)';
  },
  updateTaskCount: (uuid) => {
    const projectCard = document.querySelector(`[data-id="${uuid}"]`);
    const numberOfTasks = projectCard.querySelector('.numberOfTasks');
    numberOfTasks.textContent = `${storage.todoCount(uuid)} items`;
  },
  sortAll: () => {
    const filters = projects.filters;
    projects.sortedTodos = { 'day': [], 'week': [], 'month': []};
    filters.forEach((duration) => {
      projects.sortItems(duration);

      const filter = document.getElementById(duration);
      const numberOfTasks = filter.querySelector('.numberOfTasks');
      numberOfTasks.textContent = `${projects.sortedTodos[duration].length} items`;
    });
    console.log('new:', projects.sortedTodos);
  },
  sortItems: (duration) => {
    var numOfDays;
    switch (duration) {
      case 'day':
        numOfDays = 1;
        break
      case 'week':
        numOfDays = 7;
        break
      case 'month':
        numOfDays = 30;
        break
    }
    storage.all().forEach((key, index) => {
      // console.log(key, index);
      var todos = storage.getProject(key).todos;
      const newArrayOfObj = todos.filter(element => dateDiffInDays(new Date(), new Date(element.date)) < numOfDays);
      // console.log('new', `${duration}`, newArrayOfObj);
      projects.sortedTodos[duration] = projects.sortedTodos[duration].concat(newArrayOfObj);
    });
  },
  updatedFilterData: (duration) => {
    projects.sortAll();
    // console.log(`clicked ${duration} filter`);
    // pubsub.pub('filterTodos', );
    return { 'title': duration, 'todos': projects.sortedTodos[duration], 'isFilter': true };
  }
}