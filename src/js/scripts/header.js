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

//При скролле убирается часть шапки
var mainNav = document.querySelector('.header');

window.onscroll = function () {
  windowScroll();
};

function windowScroll() {
  mainNav.classList.toggle("active", mainNav.scrollTop > 50 || document.documentElement.scrollTop > 50);
}

//Поиск в шапке
var jsformsearch = document.querySelector('.js-form-search');
var jsbuttonsearch = document.querySelector('.js-button-search');
var jssearchclose = document.querySelector('.js-search-close');
var jsheaderlogo = document.querySelector('.js-header-logo');
var jsheadercontent = document.querySelector('.js-header-content');

jsbuttonsearch.addEventListener('click', function () {
  jsformsearch.classList.add('show');
  jsheaderlogo.classList.add('hide');
  jsheadercontent.classList.add('change');
});

jssearchclose.addEventListener('click', function () {
  jsformsearch.classList.remove('show');
  jsheaderlogo.classList.remove('hide');
  jsheadercontent.classList.remove('change');
});

//Header, наведение на пункты
var headerbottomlistitem = document.querySelector('.js-head-link');
headerbottomlistitem.addEventListener('mouseover', function () {
  var jsheadmenu = headerbottomlistitem.querySelector('.js-head-menu');
  jsheadmenu.classList.add('show');
});
headerbottomlistitem.addEventListener('mouseout', function () {
  var jsheadmenu = headerbottomlistitem.querySelector('.js-head-menu');
  jsheadmenu.classList.remove('show');
});

// Бургер
var jsburgers = document.querySelectorAll(".js-burger");
var jsheadermenus = document.querySelectorAll(".js-header-menu");
var body = document.querySelector("body");
var headerbottoms = document.querySelectorAll(".header-bottom__menu");

jsburgers.forEach(function(jsburger) {
  jsburger.addEventListener("click", myFunction);
});

function myFunction() {
  jsheadermenus.forEach(function(jsheadermenu) {
    jsheadermenu.classList.toggle("show");
  });

  jsburgers.forEach(function(jsburger) {
    jsburger.classList.toggle("change");
  });

  body.classList.toggle("ov-hidden");

  headerbottoms.forEach(function(headerbottom) {
    headerbottom.classList.toggle("hide");
  });
}
