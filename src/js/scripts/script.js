import { MOB, TABLET } from '../modules/consts.js';

if (window.outerWidth < MOB) {
  if (
    window.location.href === 'https://investinsaratov.ru/en/account/' ||
    window.location.href === 'https://investinsaratov.ru/ru/account/'
  ) {
    document.body.style.backgroundColor = '#fff';
  }
}

if (window.outerWidth < TABLET) {
  if (window.location.href.includes('account')) {
    document.body.style.backgroundColor = '#fff';
  }
}
