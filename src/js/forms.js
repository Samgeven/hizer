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