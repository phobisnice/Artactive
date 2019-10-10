"use strict";

import svg4everybody from "svg4everybody";
import Swiper from "swiper";
import "core-js/stable";
import "./mobile-menu";
import "./modal";
import "./works";
import "./content-form";
import "./map";

svg4everybody();

window.onload = function () {
  var feedbackSlider = new Swiper('.swiper-container', {
    loop: false,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 1,
    breakpoints: {
      992: {
        slidesPerView: 2
      }
    },
    slidePrevClass: 'slider__review--prev',
    slideNextClass: 'slider__review--next',
    navigation: {
      nextEl: '.slider__controls--feedbacks .slider__btn--next',
      prevEl: '.slider__controls--feedbacks .slider__btn--prev',
      disabledClass: 'slider__btn--disabled'
    },
  })
};
