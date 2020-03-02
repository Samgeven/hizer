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
      });
      $('.good-slider').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        swipe: false,
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
// Галерея

$(document).ready(function() {

    $("#lightgallery").lightGallery({
        selector: '.good-gallery-item__link',
        thumbnail: true,
        toogleThumb: false
    });

    // Прокрутка галереи в разрешении от 768px до 992px

    $(window).scroll(function() {
        let galleryTop = $(".good-gallery_spc");
        let topOffset = window.pageYOffset;
        galleryTop.css("top", topOffset < 375 ? topOffset : 375)
    })
});
// Всплывающие окна
/*
$('.weight-popup').magnificPopup({
    type:'image',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

*/
// Сортировка товаров

$(document).ready(function() {
    $('.catalogue-sort__link').click(function() {
        $('.catalogue-sort__link').not(this).removeClass('sort_active sort_up sort_down')
        if ($(this).hasClass('sort_active')) {
            if ($(this).hasClass('sort_up')) { 
                $(this).removeClass('sort_up');
                $(this).addClass('sort_down');
            }
            else {
                $(this).removeClass('sort_down');
                $(this).addClass('sort_up');
            }
        }
        else {
            $(this).addClass('sort_active');
            $(this).addClass('sort_down');
        }
    });

    $('.catalogue-sort__item:first-child').clone().appendTo($('.catalogue-sort__active'))
    $('.catalogue-sort__active').click(function() {
        $('.catalogue-sort__list').toggleClass('sort-active_mob')
    });

    $('.catalogue-sort__link').click(function() {
        $('.catalogue-sort__active').html('')
        $(this).clone().appendTo($('.catalogue-sort__active'));
        $('.catalogue-sort__list').removeClass('sort-active_mob')
    })
});
$("#contactsForm, #dealerForm").validate({
	rules: {
		mail: {
			required: true,
			email: true,
		},
		phone: {
			required: true,
			mobileRU: true,
		}
	},
	messages: {
		mail: {
			email: "Мы не сможем прислать письмо по этому адресу",
			required: "Мы не сможем прислать письмо по этому адресу",
		},
		phone: {
			mobileRU: "Мы не сможем дозвониться по этому номеру",
			required: "Мы не сможем дозвониться по этому номеру",
		},
		contacts: {
			onsubmit: "Отправлено",
		}
	}
	});
// Кастомные селекты

$(document).ready(function(){
    $('.where-to-buy__select').styler({
        selectVisibleOptions: 6,
    })
})
// Кастомные маркеры для яндекс карт

	ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.76, 37.64],
                zoom: 7
            }), 
            myPlacemark1 = new ymaps.Placemark([55.76, 37.64], {
                balloonContent: 'Маленькая иконка'
            }, {
                iconLayout: 'default#image',
                iconImageClipRect: [[0,0], [36, 47]],
                iconImageHref: '././dist/img/ui/pin.svg',
                iconImageSize: [36, 47],
                iconImageOffset: [-15, -27],
            });
            myMap.geoObjects.add(myPlacemark1);
        }