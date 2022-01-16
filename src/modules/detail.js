import { pubsub } from "./pubsub";

export const detail = {
  render: (data) => {
    const list = document.getElementById('list');
    const element = document.querySelector(`[data-id="${data.identifier}"]`);

    const detailsListItem = document.createElement('li');
    detailsListItem.setAttribute('id', 'details');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.value = data['date'];

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.value = data['description'];
    description.addEventListener('input', function(e) {
      console.log('hello', data.identifier);
    });

    detailsListItem.appendChild(dateInput);
    detailsListItem.appendChild(description);

    var details = document.getElementById('details');
    if (details !== null) {
      details.classList.remove('show');
      setTimeout(function () {
        details.outerHTML = '';
        console.log('detail !== null');
      }, 100);
    }

    // if the li originally clicked did not have a detail view, add a detail view
    if (element.nextElementSibling == null) {
      list.appendChild(detailsListItem);
      setTimeout(function () {
        detailsListItem.classList.add('show');
      }, 100);
    } else if (element.nextElementSibling.id !== 'details') {
      console.log('there wasnt details');
      list.insertBefore(detailsListItem, element.nextElementSibling);
      setTimeout(function () {
        detailsListItem.classList.add('show');
      }, 100);
    }
  },
  getChanges: (title, description, date) => {
    console.log('hello');
  }
}