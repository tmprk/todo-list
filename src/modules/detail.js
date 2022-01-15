import { pubsub } from "./pubsub";

export const detail = {
  render: (data) => {
    console.log('rendering');
    const list = document.getElementById('list');
    const element = document.querySelector(`[data-id="${data.identifier}"]`);

    const detailsListItem = document.createElement('li');
    detailsListItem.setAttribute('id', 'details');

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.value = Date.parse(data['date']);

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.textContent = data['description'];

    detailsListItem.appendChild(dateInput);
    detailsListItem.appendChild(description);

    var nextId = element.nextElementSibling.id;
    // console.log(nextId); // left off here
  },
  getChanges: (title, description, date) => {
    console.log('hello');
  }
}