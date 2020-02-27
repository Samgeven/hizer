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