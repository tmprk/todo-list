import { pubsub } from "./pubsub";
import { storage } from "./storage";

export const projects = {
  render: div => {
    const container = document.createElement('div');
    container.setAttribute('id', 'projects');

    const categories = ['day', 'week', 'month'];
    const deadlines = document.createElement('div');
    deadlines.setAttribute('id', 'deadlines');

    categories.forEach((element, index) => {
      const category = document.createElement('div');
      category.setAttribute('id', categories[index]);
      category.className = 'filter';

      const info = document.createElement('div');
      info.className = 'info';

      const title = document.createElement('div');
      title.className = 'projectTitle';
      title.textContent = categories[index];

      const taskNumber = document.createElement('div');
      taskNumber.className = 'numberOfTasks';
      taskNumber.textContent = '0 tasks';

      info.appendChild(title)
      info.appendChild(taskNumber);

      category.appendChild(info);

      const dot = document.createElement('div');
      dot.className = 'dot orange';

      category.appendChild(dot);
      deadlines.appendChild(category);
    })

    container.appendChild(deadlines);
    div.appendChild(container);

    pubsub.sub('projectAdded', projects.add);
  },
  add: (projectName) => {
    var uuid = Math.random().toString(36).slice(-6);
    
    const newProject = document.createElement('div');
    newProject.className = 'project';
    newProject.setAttribute('data-id', uuid);

    const projectTitle = document.createElement('div');
    projectTitle.className = 'projectTitle';
    projectTitle.textContent = projectName;
    
    const numberOfTasks = document.createElement('div');
    numberOfTasks.className = 'numberOfTasks';
    numberOfTasks.textContent = '0 items';

    newProject.appendChild(projectTitle);
    newProject.appendChild(numberOfTasks);

    newProject.addEventListener('click', function(e) {
      pubsub.pub('updateListView', uuid);
    });

    var projectsContainer = document.querySelector('#projects');
    projectsContainer.appendChild(newProject);

    // add new project to storage
    const emptyProjectData = {
      'projectTitle': `${projectName}`,
      'todos': []
    };
    storage.set(uuid, JSON.stringify(emptyProjectData));
    console.log(`${projectName} was added`);
  }
}