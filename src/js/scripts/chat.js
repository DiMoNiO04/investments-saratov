import { TABLET } from '../modules/consts.js';

const menu = document.querySelector('.chat__left');
const content = document.querySelector('.chat__content');
const btnBack = document.querySelector('.chat__content-button');
const accountBtns = document.querySelectorAll('.account__table-btn');

let scrollbar;

if (document.querySelector('.chat__content-cont')) {
  const outerBlock = document.querySelector('.chat__content-cont');
  scrollbar = new SimpleBar(outerBlock);
}

function scrollToNewSms() {
  const newBlocks = document.querySelectorAll('.chat__content-block');
  const newBlock = newBlocks[newBlocks.length - 1];

  const distance = newBlock.offsetTop;
  scrollbar.getScrollElement().scrollTo({
    top: distance,
  });
}

function clickAccountBtn() {
  accountBtns.forEach((accountBtn) => {
    accountBtn.addEventListener('click', () => {
      scrollToNewSms();
    });
  });
}

function clickBtnBack() {
  if (window.outerWidth < TABLET) {
    btnBack.addEventListener('click', () => {
      menu.classList.remove('--hide');
      content.classList.remove('--active');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.chat')) {
    clickBtnBack();
    clickAccountBtn();
  }
});
