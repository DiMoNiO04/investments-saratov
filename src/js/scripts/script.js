import { TABLET } from '../modules/consts.js';

if (window.innerWidth < TABLET) {
  if (
    window.location.href.includes('auth-reg') ||
    window.location.href.includes('personal') ||
    window.location.href.includes('appeals') ||
    window.location.href.includes('settings') ||
    window.location.href.includes('organization')
  ) {
    document.body.style.backgroundColor = '#fff';
  }
}
