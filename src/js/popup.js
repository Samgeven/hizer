// Всплывающие окна

$('.weight-popup').magnificPopup({
    type:'image',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });

  $('#popup-link').magnificPopup({
    type:'inline',
    midClick: true,
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });