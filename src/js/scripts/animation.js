import { fadeIn, fadeOut } from '../modules/animation.js';

function animationModalWriteRequest() {
  if (document.querySelector('.modal-write')) {
    const modalWrite = document.querySelector('.modal-write');
    const modalWriteSucces = document.querySelector('.modal-write.--success');
    const btnModalWrite = document.querySelector('.modal-write__btns .btn-def');

    btnModalWrite.addEventListener('click', () => {
      fadeOut(modalWrite, 0);
      fadeIn(modalWriteSucces, 750, 'flex');
    });
  }
}

animationModalWriteRequest();
