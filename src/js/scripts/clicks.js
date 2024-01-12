import { fadeIn } from '../modules/animation.js';
import { MOB } from '../modules/consts.js';

$('.js-dropdown-list').each(function () {
  const dropdownList = $(this);
  const dropdownTitle = $(this).find('.js-dropdown-title');
  const dropdownContent = $(this).find('.js-dropdown-content');

  dropdownTitle.on('click', () => {
    if (dropdownList.hasClass('footer__list') && $(window).width() > MOB) {
      return;
    }
    if (dropdownList.parent().parent()) dropdownContent.slideToggle();
    dropdownList.toggleClass('active');
  });
});

$(document).ready(() => {
  $('.js-dropdown-list.active').each(function () {
    const dropdownContent = $(this).find('.js-dropdown-content');
    dropdownContent.slideDown();
  });
});

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

function openAsideMenuProfile() {
  if (document.querySelector('.js-account-menu')) {
    const asideContent = document.querySelector('.js-account-menu');
    const asideBtn = document.querySelector('.js-account-menu-open');

    asideBtn.addEventListener('click', () => {
      asideContent.classList.add('active');
      document.body.classList.add('hidden');
    });
  }
}

function toggleAddOrganization() {
  if (document.querySelector('.js-add-org-btn')) {
    const addBtn = document.querySelector('.js-add-org-btn');

    addBtn.addEventListener('click', () => {
      const fieldset = document.querySelector('.account__fieldset.--active');
      const title = fieldset.querySelector('.account__fieldset-subtitles');
      const contentNewOrg = fieldset.querySelector('.account__fieldset-block--new');

      fadeIn(title, 750, 'flex');
      fadeIn(contentNewOrg, 750, 'block');
    });
  }
}

function toggleActive() {
  if (document.querySelector('.js-toggles')) {
    const togglesEl = document.querySelector('.js-toggles');
    const toggles = togglesEl.querySelectorAll('.js-toggle');

    toggles.forEach((toggle) => {
      toggle.addEventListener('click', () => {
        toggles.forEach((el) => el.classList.remove('--active'));
        toggle.classList.add('--active');
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  clickCalculatorBtn();
  openAsideMenuProfile();
  toggleAddOrganization();
  toggleActive();
});
