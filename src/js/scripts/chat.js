import { TABLET } from '../modules/consts.js';

const menuItems = document.querySelectorAll('.chat__menu-item');
const menu = document.querySelector('.chat__left');
const content = document.querySelector('.chat__content');
const btnBack = document.querySelector('.chat__content-button');

let scrollbar;

if (document.querySelector('.chat__content-blocks')) {
  const outerBlock = document.querySelector('.chat__content-blocks');
  scrollbar = new SimpleBar(outerBlock);
}

function scrollToNewSms() {
  const newBlock = document.querySelector('.chat__content-new');

  const distance = newBlock.offsetTop;
  scrollbar.getScrollElement().scrollTo({
    top: distance,
  });
}

function clickBtnBack() {
  if (window.outerWidth < TABLET) {
    btnBack.addEventListener('click', () => {
      menu.classList.remove('--hide');
      content.classList.remove('--active');
      menuItems.forEach((it) => it.classList.remove('--active'));
    });
  }
}

function clickItems() {
  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuItems.forEach((it) => it.classList.remove('--active'));
      item.classList.add('--active');

      if (window.outerWidth < TABLET) {
        menu.classList.add('--hide');
        content.classList.add('--active');
      }

      scrollToNewSms();
    });
  });
}

function removeActiveItems() {
  if (window.outerWidth < TABLET) {
    menuItems.forEach((menuItem) => menuItem.classList.remove('--active'));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.chat')) {
    clickBtnBack();
    clickItems();
    removeActiveItems();
    scrollToNewSms();
  }
});
