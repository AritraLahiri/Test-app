const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
	category: {
		type: String,
		default: 'Food',
		required: true
	},
	expenses: {
		type: Number,
		required: true,
		default: 0
	},

	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Expense', expensesSchema);
