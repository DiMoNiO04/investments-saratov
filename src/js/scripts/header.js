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
  const isWideScreen = window.innerWidth > 767;
  if (isWideScreen) {
    mainNav.classList.toggle('active', mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
  }
}
windowScroll();
window.addEventListener('resize', windowScroll);
window.addEventListener('scroll', windowScroll);

// Поиск в шапке
const jsformsearch = document.querySelector('.js-form-search');
const jsbuttonsearch = document.querySelector('.js-button-search');
const jssearchclose = document.querySelector('.js-search-close');
const jsheadertopcontainer = document.querySelector('.js-header-top-container');
const jssearchinput = document.querySelector('.js-search-input');

jsbuttonsearch.addEventListener('click', () => {
  jsformsearch.classList.add('show');
  jsheadertopcontainer.classList.add('hide');
});

jssearchclose.addEventListener('click', () => {
  jssearchinput.value = '';
  jsformsearch.classList.remove('show');
  jsheadertopcontainer.classList.remove('hide');
});

window.addEventListener('scroll', () => {
  jssearchclose.click();
});

header.addEventListener('mouseleave', () => {
  jssearchclose.click();
});

// очистка инпут при заполнении/пустоте
const searchInput = document.querySelector('.js-search-mob-input');
const closeButton = document.querySelector('.js-search-mob-close');

searchInput.addEventListener('input', function () {
  if (this.value.trim() !== '') {
    closeButton.classList.add('change');
  } else {
    closeButton.classList.remove('change');
  }
});
closeButton.addEventListener('click', () => {
  searchInput.value = '';
  closeButton.classList.remove('change');
});

// Header, наведение на пункты
const headerBottomLinks = document.querySelectorAll('.js-head-link');
const jsHeadMenus = document.querySelectorAll('.js-head-menu');
headerBottomLinks.forEach((headerBottomLink) => {
  const jsHeadMenu = headerBottomLink.querySelector('.js-head-menu');
  headerBottomLink.addEventListener('mouseover', () => {
    jsHeadMenu.classList.add('show');
  });
  headerBottomLink.addEventListener('mouseout', () => {
    jsHeadMenu.classList.remove('show');
  });
});
jsHeadMenus.forEach((jsHeadMenu) => {
  jsHeadMenu.addEventListener('mouseover', () => {
    jsHeadMenu.classList.add('show');
  });
  jsHeadMenu.addEventListener('mouseout', () => {
    jsHeadMenu.classList.remove('show');
  });
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
