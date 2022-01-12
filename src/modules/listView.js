import { pubsub } from './pubsub.js'
import { storage } from './storage.js';

export const listView = {
  selectedProject: null,
  render: div => {
    const listWrapper = document.createElement('div');
    listWrapper.setAttribute('id', 'listWrapper');
    listWrapper.innerHTML = `<div id="listHeader">Select Project</div>
    <ul id="list"></ul>`

    const addTodoButton = document.createElement('button');
    addTodoButton.setAttribute('id', 'addTodoButton');
    addTodoButton.textContent = '+';

    addTodoButton.addEventListener('click', function(event) {
      event.preventDefault();
      pubsub.pub('showModal', null);
    })

    div.appendChild(listWrapper);
    div.appendChild(addTodoButton);
    // pubsub.sub('newListItem', listView.addTodo)
    pubsub.sub('updateListView', listView.updateView);
    pubsub.sub('submitTodo', listView.addTodo);
  },
  updateView: (uuid) => {
    listView.selectedProject = uuid;
    // console.log(listView.selectedProject);
    console.log(`${uuid} clicked`);
    const list = document.getElementById('list');
    const header = document.getElementById('listHeader');

    var projectObj = storage.getProject(uuid);
    var todos = projectObj['todos'];

    header.textContent = projectObj['title'];
    list.innerHTML = '';

    todos.forEach((element, index) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-item';

      const checkbox = document.createElement('input');
      checkbox.setAttribute('checked', 'false');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.className = 'custom-checkbox';

      const todoTitle = document.createElement('div');
      todoTitle.className = 'todoName';
      todoTitle.textContent = element.todoTitle;

      listItem.appendChild(checkbox);
      listItem.appendChild(todoTitle);

      list.appendChild(listItem);
      // <li class="list-item">
      //   <input type="checkbox" class="custom-checkbox" checked>
      //   <div class="todoName">Testing</div>
      // </li>
    })
    // clear existing items in list; access variable of selected list;
    // enumerate todos variable
    // console.log('update view function', data);
  },
  addTodo: (todoData) => {
    console.log(listView.selectedProject);
    console.log(todoData);
  }
}