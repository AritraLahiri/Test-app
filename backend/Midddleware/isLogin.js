// LOGIN MIDDLEWARE
const isLoggedIn = (req, res, next) => {
	if (req.session.user_id) {
		next();
	} else {
		res.redirect('https://5fb766e7e1370a9ae537eb85--angry-johnson-d5dbfc.netlify.app/login');
	}
};

module.exports = isLoggedIn;
