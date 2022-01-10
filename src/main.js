import './style.css'
import { pubsub } from './modules/pubsub.js'
import { header } from './modules/header';
import { projects } from './modules/projects';
import { listView } from './modules/listView';
import { storage } from './modules/storage';

const list = document.getElementById('list');
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((element, index) => {
  element.addEventListener('click', function(e) {

    // don't trigger when you click the custom checkbox
    if (!e.target.classList.contains('custom-checkbox')) {
      var nextId = element.nextElementSibling.id;
      var details = document.getElementById('details');
      if (details !== null) {
        details.classList.remove('show');
        setTimeout(function () {
          details.outerHTML = ''
        }, 400);
      };

      // if the li originally clicked did not have a detail view, add a detail view
      if (nextId !== 'details') {
        const detailsListItem = createDetailItem(new Date(), 'This is an example');
        list.insertBefore(detailsListItem, element.nextElementSibling);
        setTimeout(function () {
          detailsListItem.classList.add('show');
        }, 10);
      }
    }
  })
})

function createDetailItem(date, notes) {
  const detailsListItem = document.createElement('li');
  detailsListItem.setAttribute('id', 'details')

  const dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'date');
  dateInput.valueAsDate = date;

  const description = document.createElement('input');
  description.setAttribute('type', 'text');
  description.textContent = notes;

  detailsListItem.appendChild(dateInput);
  detailsListItem.appendChild(description);

  return detailsListItem;
}

function main() {
  const sidebar = document.getElementById('sidebar');
  const todoList = document.getElementById('todoList');

  header.render(sidebar);
  projects.render(sidebar);

  listView.render(todoList);

  if (storage.keys.length == 0) {
    projects.add('example');
  }
}

main();