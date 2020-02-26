$(document).ready(function(){
    $('.main-slider-js').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            },
          }],
      });
      $('.slider-pop-js').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              arrows: false,
            },
          },
          {
            breakpoint: 767,
            settings: {
              arrows: false,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 3,
              variableWidth: true,
              arrows: false,
            },
          }
        ],
      });
      $('.good-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: true,
            fade: false,
          }
        }],
      });
});

$('.good-gallery-preview__item').click(function() {
  $('.good-slider').slick('slickGoTo',$(this).index());
})