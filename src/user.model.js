//Requisitos.
const mongoose = require('mongoose');

//Modelo/Constructor usuario.
const Users = mongoose.model('User', {
	name: {
		type: String,
		required: true
	},

	lastName: {
		type: String,
		required: true
	}
});

//Exportaciones.
module.exports = Users;
