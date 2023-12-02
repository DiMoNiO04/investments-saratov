function clickFullText() {
  if (document.querySelector('.js-dropdown-list')) {
    const dropdownLists = document.querySelectorAll('.js-dropdown-list');

    dropdownLists.forEach((dropdownList) => {
      const dropdownTitle = dropdownList.querySelector('.js-dropdown-title');
      const dropdownContent = dropdownList.querySelector('.js-dropdown-content');

      if (
        (dropdownList.classList.contains('footer__list') && window.innerWidth < 768) ||
        !dropdownList.classList.contains('footer__list')
      ) {
        dropdownTitle.addEventListener('click', () => {
          const contentHeight = dropdownContent.scrollHeight;

          if (dropdownList.classList.contains('active')) {
            dropdownContent.style.height = '0px';
          } else {
            dropdownContent.style.height = `${contentHeight}px`;
          }

          dropdownList.classList.toggle('active');
        });
      }
    });
  }
}

function addActiveFirstStepsOnLoad() {
  const dropdownLists = document.querySelectorAll('.js-dropdown-list');

  let isFind = false;
  dropdownLists.forEach((dropdownList) => {
    if (dropdownList.classList.contains('steps-investor__item') && !isFind) {
      const dropdownContent = dropdownList.querySelector('.js-dropdown-content');
      const contentHeight = dropdownContent.scrollHeight;
      dropdownContent.style.height = `${contentHeight}px`;
      dropdownList.classList.add('active');
      isFind = true;
    }
  });
}

function clickCalculatorBtn() {
  const btn = document.querySelector('.js-calc-items');

  if (btn && window.innerWidth < 768) {
    const btnText = btn.querySelector('span');
    const content = document.querySelector('.js-calc-items-content');

    btn.addEventListener('click', () => {
      if (btn.classList.contains('--hide')) {
        btnText.textContent = 'Показать еще';
        btn.classList.remove('--hide');
        content.classList.add('--hide');
      } else {
        btnText.textContent = 'Свернуть';
        content.classList.remove('--hide');
        btn.classList.add('--hide');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addActiveFirstStepsOnLoad();
  clickFullText();
  clickCalculatorBtn();
});
