import { pubsub } from './pubsub.js'
import { storage } from './storage.js';
import Todo from './models/todo.js';

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
      pubsub.pub('showModal', listView.selectedProject);
    })

    div.appendChild(listWrapper);
    div.appendChild(addTodoButton);
    // pubsub.sub('newListItem', listView.addTodo)
    pubsub.sub('updateListView', listView.updateView);
    pubsub.sub('submitTodo', listView.addTodo);
  },
  updateView: (uuid) => {
    listView.selectedProject = uuid;
    console.log(`${uuid} clicked`);
    const list = document.getElementById('list');
    const header = document.getElementById('listHeader');

    var projectObj = storage.getProject(uuid);
    var todos = projectObj['todos'];

    header.textContent = projectObj['title'];
    list.innerHTML = '';

    todos.forEach((element) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.setAttribute('data-id', element.identifier);
      listItem.setAttribute('checked', element.complete);

      listItem.addEventListener('click', function(event) {
        // call 'showDetail'
        // don't trigger when you click the custom checkbox
        if (!event.target.classList.contains('custom-checkbox')) {
          listView.showDetail(element.identifier);
        }
      });

      const checkbox = document.createElement('input');
      
      if (element.complete) {
        listItem.classList.add('complete');
        checkbox.setAttribute('checked', '');
      }

      checkbox.setAttribute('type', 'checkbox');
      checkbox.className = 'custom-checkbox';

      checkbox.onclick = function(e) {
        const listItem = e.target.closest('li');
        const todoId = listItem.getAttribute('data-id');
        storage.toggle(uuid, todoId);
      }

      const todoTitle = document.createElement('div');
      todoTitle.className = 'todoName';
      todoTitle.textContent = element.title;

      listItem.appendChild(checkbox);
      listItem.appendChild(todoTitle);

      list.appendChild(listItem);
    })
  },
  addTodo: (todoData) => {
    todoData.complete = false;
    const obj = Todo.from(todoData); // Todo object from json
    storage.set(listView.selectedProject, obj); // set item to localstorage for selected project
    listView.updateView(listView.selectedProject); // update view for selected project
    pubsub.pub('updateCount', listView.selectedProject);
  },
  showDetail: (taskID) => {
    // using project id and task id,
    // get task data from project
    // pubsub publishes 'showDetail'

    // run create detail view
    // append it to item id
    // populate its values with data from localStorage
    const todos = storage.getProject(listView.selectedProject).todos;
    const taskData = todos.find(function(v) {
      return v.identifier === Number(taskID)
    });
    pubsub.pub('showDetail', taskData);
  }
}