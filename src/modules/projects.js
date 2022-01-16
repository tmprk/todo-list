import Project from "./models/project";
import { pubsub } from "./pubsub";
import { storage } from "./storage";
import { removeElementsByClass } from "./utils";
import { dateDiffInDays } from "./utils";

export const projects = {
  sortedTodos: [],
  render: div => {
    const container = document.createElement('div');
    container.setAttribute('id', 'projects');

    const filters = ['day', 'week', 'month'];
    const deadlines = document.createElement('div');
    deadlines.setAttribute('id', 'deadlines');

    // sort todos into the filters

    filters.forEach((element, index) => {
      const category = document.createElement('div');
      category.setAttribute('id', filters[index]);
      category.className = 'filter';

      const info = document.createElement('div');
      info.className = 'info';

      const title = document.createElement('div');
      title.className = 'projectTitle';
      title.textContent = filters[index];

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
        projects.sortItems(e.target.id);
      })
      deadlines.appendChild(category);
    })
    container.appendChild(deadlines);
    div.appendChild(container);
    
    projects.refresh();
    pubsub.sub('projectAdded', projects.create);
    pubsub.sub('updateCount', projects.updateCount);
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

    var projectObj = storage.getProject(uuid);
    var todos = projectObj['todos'];

    const objToPass = {};
    objToPass['title'] = projectObj['title'];
    objToPass['uuid'] = uuid;
    objToPass['todos'] = todos;
    
    newProject.addEventListener('click', function (e) {
      pubsub.pub('updateListView', objToPass);
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
  },
  updateCount: (uuid) => {
    const projectCard = document.querySelector(`[data-id="${uuid}"]`);
    const numberOfTasks = projectCard.querySelector('.numberOfTasks');
    numberOfTasks.textContent = `${storage.todoCount(uuid)} items`;
  },
  sortItems: (duration) => {
    var numOfDays;
    switch (duration) {
      case 'day':
        console.log('day');
        numOfDays = 1;
        break
      case 'week':
        console.log('week');
        numOfDays = 7;
        break
      case 'month':
        console.log('month');
        numOfDays = 30;
        break
    }
    storage.all().forEach((key) => {
      var todos = storage.getProject(key).todos;
      const newArrayOfObj = todos.filter(element => dateDiffInDays(new Date(element.date), new Date()) < numOfDays);
      projects.sortedTodos[key] = newArrayOfObj;
    });
    console.log(projects.sortedTodos);
  }
}