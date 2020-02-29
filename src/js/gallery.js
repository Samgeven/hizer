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