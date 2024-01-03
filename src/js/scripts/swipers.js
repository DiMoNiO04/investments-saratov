import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { TABLET, MOB, countCards } from '../modules/consts.js';

function createSlides(elements, nameSlider, nameSlide, nameCard, countEl) {
  if (document.querySelector(`.${nameSlider}`)) {
    const slider = document.querySelector(`.${nameSlider}`);
    slider.innerHTML = '';

    for (let indexEl = 0; indexEl < elements.length; indexEl += countEl) {
      const swiperSlide = document.createElement('div');
      swiperSlide.classList.add('swiper-slide', `${nameSlide}`);

      for (let j = indexEl; j < indexEl + countEl && j < elements.length; j += 1) {
        const element = document.createElement('div');
        element.classList.add(`${nameCard}`);
        element.innerHTML = elements[j].innerHTML;
        swiperSlide.appendChild(element);
      }

      slider.appendChild(swiperSlide);
    }
  }
}

function cardsInnerWidth(swiper) {
  if (document.querySelectorAll(`.${swiper.card}`)) {
    const cards = document.querySelectorAll(`.${swiper.card}`);

    if (window.innerWidth >= TABLET) {
      createSlides(cards, swiper.slider, swiper.slide, swiper.card, swiper.counts[0]);
    } else if (window.innerWidth < TABLET && window.innerWidth >= MOB) {
      createSlides(cards, swiper.slider, swiper.slide, swiper.card, swiper.counts[1]);
    } else if (window.innerWidth < MOB) {
      createSlides(cards, swiper.slider, swiper.slide, swiper.card, swiper.counts[2]);
    }
  }
}

// Массив для слайдеров , которые меняют количество в адаптиве
const SWIPERS = {
  news: {
    card: 'news__card',
    slider: 'news__slider',
    slide: 'news__slide',
    counts: [countCards.five, countCards.three, countCards.one],
  },
};

// ------------------ Инициализация слайдеров ---------------------//
function initBenefitsSlider() {
  if (document.querySelector('.benefits__swiper')) {
    const slider = document.querySelector('.benefits__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 500,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initSuccessHistSlider() {
  if (document.querySelector('.success-hist__swiper')) {
    const slider = document.querySelector('.success-hist__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation],
      slidesPerView: 1,
      loop: true,
      speed: 1000,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initIntroSlider() {
  if (document.querySelector('.intro__swiper')) {
    const slider = document.querySelector('.intro__swiper');
    const fraction = slider.parentElement.querySelector('.slider-navigation__fraction');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      autoplay: {
        delay: 4000,
      },
      speed: 1500,
      pagination: {
        el: fraction,
        type: 'fraction',
      },
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
    });
  }
}

function initNewsSlider() {
  if (document.querySelector('.news__swiper')) {
    const slider = document.querySelector('.news__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.06,
          spaceBetween: 13,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      },
    });
  }
}

function initStorySlider() {
  if (document.querySelector('.similar-stories__swiper')) {
    const slider = document.querySelector('.similar-stories__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      spaceBetween: 20,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.06,
        },
        768: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      },
    });
  }
}

function initBigTownSlider() {
  if (document.querySelector('.big-town__swiper')) {
    const slider = document.querySelector('.big-town__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      spaceBetween: 20,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.06,
        },
        768: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      },
    });
  }
}

function initContactsSlider() {
  if (document.querySelector('.useful-links__swiper')) {
    const slider = document.querySelector('.useful-links__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      observer: true,
      watchSlidesProgress: true,
      spaceBetween: 20,
      speed: 1000,
      loop: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        300: {
          slidesPerView: 1.06,
          slidesPerColumn: 1,
          grid: {
            rows: 1,
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          grid: {
            rows: 3,
          },
        },
        1366: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          grid: {
            rows: 2,
          },
        },
      },
    });
  }
}

function initImageGallerySliders() {
  const sliderElements = document.querySelectorAll('.image-gallery__swiper');
  sliderElements.forEach((slider) => {
    new Swiper(slider, {
      speed: 1000,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1.06,
          spaceBetween: 16,
        },
      },
    });
  });
}

function initOtherSlider() {
  if (document.querySelector('.other__swiper')) {
    const slider = document.querySelector('.other__swiper');
    const btnPrev = slider.parentElement.querySelector('.slider-navigation__btns-prev');
    const btnNext = slider.parentElement.querySelector('.slider-navigation__btns-next');

    new Swiper(slider, {
      modules: [Navigation],
      slidesPerView: 4,
      spaceBetween: 20,
      speed: 1500,
      loop: true,
      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.12,
          spaceBetween: 16,
        },
        500: {
          slidesPerView: 1.06,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1366: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }
}

function initSliders() {
  initBenefitsSlider();
  initSuccessHistSlider();
  initIntroSlider();

  cardsInnerWidth(SWIPERS.news);
  initNewsSlider();

  initStorySlider();
  initBigTownSlider();
  initContactsSlider();
  initOtherSlider();

  if (window.innerWidth < MOB) {
    initImageGallerySliders();
  }
}
// ----------------------------------------------------------------- //

document.addEventListener('DOMContentLoaded', initSliders);
