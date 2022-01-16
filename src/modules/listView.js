import { pubsub } from './pubsub.js'
import { storage } from './storage.js';
import Todo from './models/todo.js';
import { projects } from './projects.js';

export const listView = {
  selectedProject: null,
  render: div => {
    const listWrapper = document.createElement('div');
    listWrapper.setAttribute('id', 'listWrapper');
    listWrapper.innerHTML = `<div id="listHeader">Select Project</div>
    <ul id="list"></ul>`

    const addTodoButton = document.createElement('button');
    addTodoButton.setAttribute('id', 'addTodoButton');
    addTodoButton.setAttribute('disabled', '');
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
    pubsub.sub('filterTodos', listView.listTodos);
  },
  updateView: (uuid) => {
    console.log('update view', uuid);
    // pass todos json instead of uuid, or figure out how to pass in both
    const project = storage.getProject(uuid);
    listView.selectedProject = uuid;
    listView.listTodos({ 'title': project.title, 'todos': project.todos });

    document.getElementById('addTodoButton').removeAttribute('disabled');
  },
  listTodos: (obj) => {
    const list = document.getElementById('list');
    const header = document.getElementById('listHeader');

    header.textContent = obj['title'];
    list.innerHTML = '';

    const todosArray = obj['todos'];
    todosArray.forEach((element) => {
      const listItem = document.createElement('li');
      listItem.className = 'list-item';
      listItem.setAttribute('data-id', element.identifier);
      listItem.setAttribute('checked', element.complete);

      listItem.addEventListener('click', function (event) {
        // call 'showDetail'
        // don't trigger when you click the custom checkbox
        if (!event.target.classList.contains('custom-checkbox')) {
          listView.showDetail(element.identifier, element.parent);
        }
      });

      const checkbox = document.createElement('input');

      if (element.complete) {
        listItem.classList.add('complete');
        checkbox.setAttribute('checked', '');
      }

      checkbox.setAttribute('type', 'checkbox');
      checkbox.className = 'custom-checkbox';

      checkbox.onclick = function (e) {
        const listItem = e.target.closest('li');
        const todoId = listItem.getAttribute('data-id');
        storage.toggle(element.parent, todoId);
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
    todoData.parent = listView.selectedProject;
    
    const obj = Todo.from(todoData); // Todo object from json
    storage.add(listView.selectedProject, obj); // set item to localstorage for selected project
    listView.updateView(listView.selectedProject); // update view for selected project
    pubsub.pub('updateCount', listView.selectedProject);
    pubsub.pub('updateSorted', null);
  },
  showDetail: (taskID, parent) => {
    // using project id and task id,
    // get task data from project
    // pubsub publishes 'showDetail'

    // run create detail view
    // append it to item id
    // populate its values with data from localStorage
    console.log(taskID, parent);
    const todos = storage.getProject(parent).todos;
    const taskData = todos.find(function(v) {
      return v.identifier === Number(taskID)
    });
    pubsub.pub('showDetail', taskData);
  }
}