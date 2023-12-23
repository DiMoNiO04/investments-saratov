function toggleActiveRegNumbers() {
  if (document.querySelector('.reg__content-fieldset')) {
    const contents = document.querySelectorAll('.reg__content-fieldset');
    const numbers = document.querySelectorAll('.reg__form-numbers__block');

    contents.forEach((content, indexContent) => {
      if (content.classList.contains('--active')) {
        numbers.forEach((number, indexNumber) => {
          if (indexNumber <= indexContent) {
            number.classList.add('--active');
          } else {
            number.classList.remove('--active');
          }
        });
      }
    });
  }
}

function changeContent() {
  const btns = document.querySelectorAll('[data-content-btn]');

  btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const contentBtn = event.currentTarget.getAttribute('data-content-btn');
      const contents = document.querySelectorAll('[data-content-block]');
      const activeContent = document.querySelectorAll(`[data-content-block=${contentBtn}]`);

      contents.forEach((cont) => cont.classList.remove('--active'));
      activeContent.forEach((content) => content.classList.add('--active'));
      btns.forEach((but) => but.classList.remove('--active'));

      btns.forEach((bt) => {
        if (bt.getAttribute('data-content-btn') === btn.getAttribute('data-content-btn')) {
          bt.classList.add('--active');
        }
      });

      if (document.querySelector('.tooltip')) {
        document.querySelector('.tooltip').remove();
      }
    });
  });
}

function changeSubContent() {
  const btns = document.querySelectorAll('[data-subcontent-btn]');

  btns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      const contentBtn = event.currentTarget.getAttribute('data-subcontent-btn');
      const contents = document.querySelectorAll('[data-subcontent-block]');
      const activeContent = document.querySelectorAll(`[data-subcontent-block=${contentBtn}]`);

      contents.forEach((cont) => cont.classList.remove('--active'));
      activeContent.forEach((content) => content.classList.add('--active'));

      toggleActiveRegNumbers();
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  changeContent();
  changeSubContent();
});
