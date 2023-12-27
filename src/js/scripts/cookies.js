import { fadeIn, fadeOut } from '../modules/animation.js';

window.onload = () => {
  const cookies = document.querySelector('.js-cookies');
  const cookiesBtn = document.querySelector('.js-cookies-btn');

  function showCookies() {
    fadeIn(cookies, 500, 'flex');
  }

  function hideCookies() {
    fadeOut(cookies, 300);
  }

  if (cookies && cookiesBtn) {
    cookiesBtn.addEventListener('click', () => {
      localStorage.setItem('cookieAccepted', 'true');
      hideCookies();
    });

    if (localStorage.getItem('cookieAccepted') === 'true') {
      hideCookies();
    } else {
      showCookies();
    }
  }
};
