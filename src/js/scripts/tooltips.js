import { MOB, TABLET } from '../modules/consts.js';

function tooltip(className) {
  if (document.querySelectorAll(className)) {
    let tooltipElem;
    const btns = document.querySelectorAll(className);

    btns.forEach((btn) => {
      btn.addEventListener('mouseover', (event) => {
        const target = event.currentTarget;
        const tooltipHtml = target.dataset.tooltip;

        if (!tooltipHtml || target.getAttribute('disabled') === '') return;

        tooltipElem = document.createElement('div');
        tooltipElem.className = 'tooltip';
        const tooltipContent = `
          <span>${tooltipHtml}</span>
        `;
        tooltipElem.innerHTML = tooltipContent;
        document.body.append(tooltipElem);

        const coords = target.getBoundingClientRect();

        let top;
        let left;

        if (window.innerWidth < TABLET) {
          left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2 - 108;
          if (left < 0) left = 108;

          top = coords.top - tooltipElem.offsetHeight - -34;
          if (top < 0) top = coords.top + target.offsetHeight + -34;
        } else {
          left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2 - 1;
          if (left < 0) left = 5;

          top = coords.top - tooltipElem.offsetHeight - 8;
          if (top < 0) top = coords.top + target.offsetHeight + 8;
        }

        tooltipElem.style.left = `${left}px`;
        tooltipElem.style.top = `${top}px`;
      });

      btn.addEventListener('mouseout', () => {
        if (tooltipElem) {
          tooltipElem.remove();
          tooltipElem = null;
        }
      });
    });
  }
}

function removeHelperTooltips() {
  const items = document.querySelectorAll('.municipality__map-item');

  if (items) {
    items.forEach((item) => {
      item.addEventListener('mouseleave', () => {
        const helps = document.querySelectorAll('.ui-helper-hidden-accessible');
        helps.forEach((help) => help.remove());
      });
    });
  }
}

if (document.querySelector('.municipality__map-item')) {
  $('.municipality__map-item').tooltip({
    track: true,
  });
}

const isTextMoreThanTwoLines = (text) => text.split('\n').length >= 4;

const docDownloadLinks = document.querySelectorAll('.doc-download__item');

if (docDownloadLinks && window.innerWidth > MOB) {
  docDownloadLinks.forEach((docDownloadLink) => {
    docDownloadLink.addEventListener('mouseover', (event) => {
      const text = event.currentTarget.querySelector('.doc-download__item-name');
      const txt = text.textContent;
      const txtHeight = text.scrollHeight;
      const height = 42;

      if (isTextMoreThanTwoLines(txt) && txtHeight > height) {
        tippy(docDownloadLink, {
          content: txt,
          placement: 'bottom',
          arrow: false,
          theme: 'light',
          maxWidth: '525px',
        });
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  removeHelperTooltips();
  tooltip('.account__table-btn');
  tooltip('.soceconomic-develop__item-tooltip');
});
