import { TABLET } from '../modules/consts.js';

function tooltip() {
  if (document.querySelectorAll('.account__table-btn')) {
    let tooltipElem;
    const btns = document.querySelectorAll('.account__table-btn');

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
          left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
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

if ($('.municipality__map-item')) {
  $('.municipality__map-item').tooltip({
    track: true,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  removeHelperTooltips();
  tooltip();
});
