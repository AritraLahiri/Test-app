const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Register = require('./Models/Users');
const Expense = require('./Models/Expenses');
const session = require('express-session');
const bcrypt = require('bcrypt');
const isLoggedIn = require('./Midddleware/isLogin');

dotenv.config();

// CONNECTING TO DB
const connectionUrl = process.env.CONNECT_DB;
mongoose
	.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('CONNECTION OPEN');
	})
	.catch((e) => console.log('SOMETHING BAD HAPPENED !' + e));
mongoose.set('useCreateIndex', true);

// MIDDLEWAREs
app.use(express.urlencoded({ extended: true }));
app.use(
	session({
		secret: 'hideme please',
		resave: false,
		saveUninitialized: true
	})
);
app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

// ROUTES
app.get('/', (req, res) => {
	res.send('GET REQUEST SERVER IS UP ');
});

// SUBMITTING EXPENSES TO THE DB
app.post('/submit', isLoggedIn, (req, res) => {
	new Expense({
		category: req.body.category,
		expenses: req.body.expense,
		user: req.session.user_id
	}).save();

	res.redirect('https://coolappbuild.netlify.app/login');
});

// SIGNING UP USER IN DB
app.post('/register', async (req, res) => {
	try {
		const { password, email, confirmPassword, name } = req.body;

		const hash = await bcrypt.hash(password, 12);

		if (password === confirmPassword) {
			const registerUser = new Register({
				name,
				email,
				password: hash,
				confirmPassword: hash
			});
			await registerUser.save();

			req.session.user_id = registerUser._id;

			res.redirect('https://coolappbuild.netlify.app/login');
		} else {
			res.send('Password not matching');
		}
	} catch (e) {
		console.log('SOMETHING WENT WRONG AHH....');
	}
});

// LOGGING IN USERS
app.post('/login', async (req, res) => {
	const { email, password } = req.body;

	const user = await Register.findOne({ email });

	if (user) {
		const validPassword = await bcrypt.compare(password, user.password);
		if (validPassword) {
			req.session.user_id = user._id;

			res.redirect('https://coolappbuild.netlify.app/');
		}
	} else {
		res.send('PASSWORD OR USERNAME DOESNOT MATCH !');
	}
});

app.get('/show', async (req, res) => {
	try {
		console.log(req.session.user_id);
		if (req.session.user_id) {
			const allExpense = await Expense.find({ user: req.session.user_id });
			console.log(allExpense);
			res.send(allExpense);
		} else {
			res.redirect('https://coolappbuild.netlify.app/');
		}
	} catch (error) {
		res.status(201).send('SOMETHING WENT WRONG');
	}
});

app.get('*', (req, res) => {
	res.send('ERROR 404');
});

// SERVER CONFIG
app.listen(process.env.PORT || 4000, () => {
	console.log('Listening on port 4000');
});
