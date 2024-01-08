function dragAreaDrops() {
  if (document.querySelector('.drag-area')) {
    const dragArea = document.querySelector('.drag-area');
    const btnDrag = document.querySelector('.drag-area__btn');
    const inputDrag = dragArea.querySelector('input');

    btnDrag.addEventListener('click', () => {
      inputDrag.click();
    });

    dragArea.addEventListener('dragover', (event) => {
      event.preventDefault();
      dragArea.classList.add('--active');
    });

    dragArea.addEventListener('dragleave', () => {
      dragArea.classList.remove('--active');
    });

    dragArea.addEventListener('drop', (event) => {
      event.preventDefault();
      dragArea.classList.remove('--active');
    });
  }
}

document.addEventListener('DOMContentLoaded', dragAreaDrops);
