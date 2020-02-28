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
    	selector: '.good-gallery-item__link'
    });

    // Прокрутка галереи в разрешении от 768px до 992px

    $(window).scroll(function() {
        let galleryTop = $(".good-gallery_spc");
        let topOffset = window.pageYOffset;
        galleryTop.css("top", topOffset < 375 ? topOffset : 375)
    })
});
// Всплывающие окна

$('.weight-popup').magnificPopup({
    type:'image',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
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
$("#contactsForm").validate({
	rules: {
		contactsMail: {
			required: true,
			email: true,
		},
		contactsPhone: {
			required: true,
			mobileRU: true,
		}
	},
	messages: {
		contactsMail: {
			email: "Мы не сможем прислать письмо по этому адресу",
			required: "Мы не сможем прислать письмо по этому адресу",
		},
		contactsPhone: {
			mobileRU: "Мы не сможем дозвониться по этому номеру",
			required: "Мы не сможем дозвониться по этому номеру",
		},
		btnSendContacts: {
			onsubmit: "Отправлено",
		}
	}
    });