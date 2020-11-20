// LOGIN MIDDLEWARE
const isLoggedIn = (req, res, next) => {
	if (req.session.user_id) {
		next();
	} else {
		res.redirect('https://coolappbuild.netlify.app/login');
	}
};

module.exports = isLoggedIn;
