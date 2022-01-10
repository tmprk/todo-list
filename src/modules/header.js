import { pubsub } from "./pubsub";

export const header = {
  render: div => {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const title = document.createElement('div');
    title.setAttribute('id', 'title');
    title.textContent = 'My Projects';

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addButton');
    addButton.textContent = '+';
    addButton.addEventListener('click', function(e) {
      const projectName = prompt("Please enter the project name");
      if (projectName == null || projectName == "") {
        console.log('prompt cancelled');
      } else {
        // project is added
        pubsub.pub('projectAdded', projectName);
      }
    })
    
    header.appendChild(title);
    header.appendChild(addButton);

    div.appendChild(header);
  },
  show: (projectName) => {
    console.log(`${projectName} was added`);
  }
}