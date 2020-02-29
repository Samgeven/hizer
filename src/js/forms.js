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