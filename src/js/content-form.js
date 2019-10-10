import send from './send.js';

const forms = Array.from(document.querySelectorAll('.form--content'));

forms.forEach((form) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const data = new FormData(form);
    send('/send.php', data);
    form.reset();
  })
});
