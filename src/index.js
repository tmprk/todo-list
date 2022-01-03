const list = document.getElementById('list');
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((element, index) => {
  element.addEventListener('click', function(e) {
    if (!e.target.classList.contains('custom-checkbox')) {
      // clear details view if it exists
      if (element.nextElementSibling.id == 'details') {
        element.nextElementSibling.classList.remove('show');
        setTimeout(function () {
          element.nextElementSibling.outerHTML = ''
        }, 400);
      } else {
        var details = document.getElementById('details');
        if (details !== null) {
          details.classList.remove('show');
          setTimeout(function () {
            details.outerHTML = ''
          }, 400);
        };

        // console.log(Array.from(list.children).indexOf(element));
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