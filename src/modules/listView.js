import { pubsub } from './modules/pubsub.js'
import { projects } from './projects.js';

export const listView = {
  render: div => {

    const listWrapper = document.createElement('div');
    listWrapper.setAttribute('id', 'listWrapper');
    listWrapper.innerHTML = `<div id="listHeader">Unfiled</div>
    <ul id="list"></ul>`

    div.appendChild(listWrapper);

    pubsub.sub('newListItem', listView.addTodo)
  },
  addTodo: (project, todoData) => {
    console.log(project);
    console.log(todoData);
  }
}