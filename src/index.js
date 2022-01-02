const list = document.getElementById('list');
const listItems = document.querySelectorAll('.list-item');

listItems.forEach((element, index) => {
  element.addEventListener('click', function(e) {
    console.log(index)
    // console.log(Array.from(list.children).indexOf(element));

    const detailsListItem = document.createElement('li');
    detailsListItem.setAttribute('id', 'details');

    // list.appendChild(detailsListItem)
    list.insertBefore(detailsListItem, element.nextElementSibling);
    
    setTimeout(function () {
      detailsListItem.className = detailsListItem.className + " fade show";
    }, 10);
  })
})