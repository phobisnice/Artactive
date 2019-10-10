const workSlider = document.querySelector('.slider--works');
const works = workSlider.querySelectorAll('.slider__work');
const prevBtn = workSlider.querySelector('.slider__btn--prev');
const nextBtn = workSlider.querySelector('.slider__btn--next');
let currentWork = 0;

const nextSlide = (evt) => {
  evt.preventDefault();
  works[currentWork].classList.remove('slider__work--active');
  currentWork = (++currentWork) % works.length;
  works[currentWork].classList.add('slider__work--active');
}

const prevSlide = (evt) => {
  evt.preventDefault();
  works[currentWork].classList.remove('slider__work--active');
  currentWork--;
  if (currentWork < 0) {
    currentWork = works.length - 1;
  }
  works[currentWork].classList.add('slider__work--active');
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
