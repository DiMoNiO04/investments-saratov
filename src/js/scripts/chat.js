const accountBtns = document.querySelectorAll('.account__table-btn');
const accountTableBtns = document.querySelectorAll('.account__table-btns .btn-def');

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

function scrollChatAfterClick(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      scrollToNewSms();
    });
  });
}

function clickAccountBtn() {
  scrollChatAfterClick(accountBtns);
  scrollChatAfterClick(accountTableBtns);
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.chat')) {
    clickAccountBtn();
  }
});
