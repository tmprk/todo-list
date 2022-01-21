import './style.css'
import { pubsub } from './modules/pubsub.js'
import { header } from './modules/header';
import { projects } from './modules/projects';
import { listView } from './modules/listView';
import { modal } from './modules/modal';
import { storage } from './modules/storage';
import { detail } from './modules/detail';

function main() {
  const container = document.getElementById('container');
  const sidebar = document.getElementById('sidebar');
  const todoList = document.getElementById('todoList');

  header.render(sidebar);
  projects.render(sidebar);

  listView.render(todoList);
  modal.render(container);
  modal.listen();

  pubsub.sub('showDetail', detail.render);
  if (storage.all().length == 0) {
    storage.initialize();
    projects.refresh();
  }
}

main();