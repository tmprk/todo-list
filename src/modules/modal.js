import { pubsub } from "./pubsub"

export const modal = {
  render: div => {
    const slidingModal = document.createElement('div');
    slidingModal.className = 'modal';
    slidingModal.setAttribute('id', 'slide-top-modal');
    slidingModal.innerHTML =
    `<div class="m-container slide-from-top">
      <h2 class="m-title">Modal title</h2>
      <div class="m-content">
        <form action="" id="form">
        
          <div class="form-item">
            <label for="name">Todo name</label>
            <input type="text" name="name" id="name" required>
          </div>

          <div class="form-item">
            <label for="description">Description</label>
            <input type="text" name="description" id="description" required>
          </div>

          <div class="form-item">
            <label for="date">Due Date</label>
            <input type="date" name="date" id="datePicker" required>
          </div>

          <div class="form-item">
            <input type="submit" value="add-todo" id='submitTodoBtn'>
          </div>
        </form>
      </div>
    </div>`;
    
    div.appendChild(slidingModal);
    pubsub.sub('showModal', modal.show);
  },
  show: (hi) => {
    var slideModal = document.getElementById('slide-top-modal');
    slideModal.classList.add('active');
  }
}