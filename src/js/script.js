'use strict';

document.addEventListener('DOMContentLoaded', () => {
  ///nav

  const navList = document.querySelector('.nav__list'),
    navItems = document.querySelectorAll('.nav__list-item');

  navList.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('nav__list-item')) {
      navItems.forEach((item) => {
        target === item
          ? item.classList.add('nav__list-item_active')
          : item.classList.remove('nav__list-item_active');
      });
    }

    if (target && target.classList.contains('nav-cross')) {
      navItems.forEach((item) => {
        item.classList.remove('nav__list-item_active');
      });
    }
  });

  //hamburger
  const hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('hamburger_active');
    navList.classList.toggle('nav__list_active');
  });

  //range

  const slider = document.querySelector('.calc-range__range'),
    progress = document.querySelector('.range-progress'),
    rangeCount = document.querySelector('.calc-range__count');

  slider.addEventListener('input', (e) => {
    progress.style.width = `${e.target.value - 3}%`;
    rangeCount.innerHTML = `${e.target.value}м<sup>2</sup>`;
  });

  //radio
  const radioBtns = document.querySelectorAll('.calc-radio__radio');

  radioBtns.forEach((btn) => {
    btn.addEventListener('input', () => {
      radioBtns.forEach((item) => {
        const img = document.querySelector(`label[for="${item.id}"] img`);

        item.checked === true
          ? (img.src = 'images/icons/radio-checked.png')
          : (img.src = 'images/icons/radio.svg');
      });
    });
  });
});
