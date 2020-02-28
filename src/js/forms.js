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
            myMap.geoObjects.add(myPlacemark1)
        }