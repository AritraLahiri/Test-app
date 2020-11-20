const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: [ true, 'Email cannot be blank' ]
	},
	password: {
		required: [ true, 'Password cannot be blank' ],
		type: String
	},
	confirmPassword: {
		type: String,
		require: true
	}
});

module.exports = mongoose.model('Register', userSchema);
