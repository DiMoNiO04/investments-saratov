import { fadeIn, fadeOut } from '../modules/animation.js';

window.onload = () => {
  const cookies = document.querySelector('.js-cookies');

  function showCookies() {
    fadeIn(cookies, 500, 'flex');
  }

  function hideCookies() {
    fadeOut(cookies, 300);
  }

  const cookiesBtn = document.querySelector('.js-cookies-btn');

  cookiesBtn.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', '1');
    hideCookies();
  });

  if (localStorage.getItem('cookieAccepted') === '1') {
    hideCookies();
  } else {
    showCookies();
  }
};
