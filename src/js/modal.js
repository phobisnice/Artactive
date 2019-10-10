import send from './send.js';

const modalForm = document.querySelector('.modal--form');
const form = modalForm.querySelector('.form');
const modalFormClose = modalForm.querySelector('.modal__close');
const mobileMenu = document.querySelector('.main-header__mobile')
const modalFormBtns = Array.from(document.querySelectorAll('.js-modal-form'));
const overlay = document.querySelector('.overlay');

function documentEsHandler(evt) {
  if (evt.key === 'Escape') {
    removeModals();
  }
};

function removeModals() {
  modalForm.classList.remove('modal--active');
  overlay.classList.remove('overlay--open');
  document.removeEventListener('keydown', documentEsHandler);
}

modalFormBtns.forEach(btn => {
  btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalForm.classList.add('modal--active');

    if (!overlay.classList.contains('overlay--open')) {
      overlay.classList.add('overlay--open')
    }

    if (mobileMenu.classList.contains('main-header__mobile--open')) {
      mobileMenu.classList.remove('main-header__mobile--open')
    }

    document.addEventListener('keydown', documentEsHandler);
  })
});

modalFormClose.addEventListener('click', (evt) => {
  evt.preventDefault();
  removeModals()
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = new FormData(form);
  send('/send.php', data);
  form.reset();
  removeModals();
})
