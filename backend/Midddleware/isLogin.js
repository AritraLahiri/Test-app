// LOGIN MIDDLEWARE
const isLoggedIn = (req, res, next) => {
	if (req.session.user_id) {
		next();
	} else {
		res.redirect('http://localhost:3000/login');
	}
};

module.exports = isLoggedIn;
