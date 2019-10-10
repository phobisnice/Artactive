import scrolling from './scrolling';

const openMenuButton = document.querySelector('.main-header__menu-open');
const closeMenuButton = document.querySelector('.main-header__menu-close');
const mobileMenu = document.querySelector('.main-header__mobile');
const overlay = document.querySelector('.overlay');

openMenuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mobileMenu.classList.add('main-header__mobile--open');
  overlay.classList.add('overlay--open');
});

closeMenuButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  mobileMenu.classList.remove('main-header__mobile--open');
  overlay.classList.remove('overlay--open');
});


const navPointers = Array.from(document.querySelectorAll('.js-scrolling'));

navPointers.forEach(item => {
  item.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (mobileMenu.classList.contains('main-header__mobile--open')) {
      mobileMenu.classList.remove('main-header__mobile--open');
      overlay.classList.remove('overlay--open');
    }
    scrolling(item, 0.3);
  })
});
