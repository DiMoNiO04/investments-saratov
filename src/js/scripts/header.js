const header = document.querySelector('.header');

const scrollHeader = () => {
  window.onscroll = () => {
    if (window.pageYOffset > 6) {
      header.classList.remove('header--transparent');
    } else {
      header.classList.add('header--transparent');
    }
  };
};

const scrollHeaderLoad = () => {
  if (window.pageYOffset >= 6) {
    header.classList.remove('header--transparent');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (window.location.href.includes('main')) {
    scrollHeaderLoad();
    scrollHeader();
  }
});

// При скролле убирается часть шапки
const mainNav = document.querySelector('.header');

function windowScroll() {
  mainNav.classList.toggle('active', mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}

window.onscroll = function () {
  windowScroll();
};

// Поиск в шапке
const jsformsearch = document.querySelector('.js-form-search');
const jsbuttonsearch = document.querySelector('.js-button-search');
const jssearchclose = document.querySelector('.js-search-close');
const jsheaderlogo = document.querySelector('.js-header-logo');
const jsheadercontent = document.querySelector('.js-header-content');

jsbuttonsearch.addEventListener('click', () => {
  jsformsearch.classList.add('show');
  jsheaderlogo.classList.add('hide');
  jsheadercontent.classList.add('change');
});

jssearchclose.addEventListener('click', () => {
  jsformsearch.classList.remove('show');
  jsheaderlogo.classList.remove('hide');
  jsheadercontent.classList.remove('change');
});

// Header, наведение на пункты
const headerbottomlistitem = document.querySelector('.js-head-link');
headerbottomlistitem.addEventListener('mouseover', () => {
  const jsheadmenu = headerbottomlistitem.querySelector('.js-head-menu');
  jsheadmenu.classList.add('show');
});
headerbottomlistitem.addEventListener('mouseout', () => {
  const jsheadmenu = headerbottomlistitem.querySelector('.js-head-menu');
  jsheadmenu.classList.remove('show');
});

// Бургер
const jsburgers = document.querySelectorAll('.js-burger');
const jsheadermenus = document.querySelectorAll('.js-header-menu');
const body = document.querySelector('body');
const headerbottoms = document.querySelectorAll('.header-bottom__menu');

function myFunction() {
  jsheadermenus.forEach((jsheadermenu) => {
    jsheadermenu.classList.toggle('show');
  });

  jsburgers.forEach((jsburger) => {
    jsburger.classList.toggle('change');
  });

  body.classList.toggle('ov-hidden');

  headerbottoms.forEach((headerbottom) => {
    headerbottom.classList.toggle('hide');
  });
}

jsburgers.forEach((jsburger) => {
  jsburger.addEventListener('click', myFunction);
});
