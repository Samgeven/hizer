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
          }
        ],
      })
});