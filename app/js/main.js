$(function(){

  $('.slider__inner').slick({
    dots: false,
    fade: true,
    infinite: true,
    prevArrow: '<button type="button" class="slider__arrow-prev slider__arrows"></button>',
    nextArrow: '<button type="button" class="slider__arrow-next slider__arrows"></button>'
  });

  $('.project__slider-items').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    infinite: true,
    prevArrow: '<button type="button" class="project-slider__arrow-prev project-slider__arrows"></button>',
    nextArrow: '<button type="button" class="project-slider__arrow-next project-slider__arrows"></button>'
  });

  $('.records__inner').slick({
    dots: false,
    slidesToScroll: 2,
    slidesToShow: 2,
    infinite: true,
    variableWidth: true,
    prevArrow: '<button type="button" class="project-slider__arrow-prev project-slider__arrows"></button>',
    nextArrow: '<button type="button" class="project-slider__arrow-next project-slider__arrows"></button>'
  });


});