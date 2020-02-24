console.log("it actually works!");

// Подменю

$('.open-submenu-js').click(function() {
    $('.header-catalogue-sub').toggleClass('is-opened-js');
})
/*
$('.open-submenu-js').on('focusout', function () {
    $('.header-catalogue-sub').removeClass('is-opened-js');
});
*/

$('.menu-back-js').click(function() {
	$('.header-catalogue-sub').toggleClass('is-opened-js');
})

// Мобильное меню

$(function(){
	$('.js-menu-trigger').click(function(){
		$('body').toggleClass('menu-opened'); // toggling mob menu on hamburger
	});
	$('.overlay').click(function(){
		$('body').removeClass('menu-opened'); // removing sidebar on click outside
    })
});
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
      })
});