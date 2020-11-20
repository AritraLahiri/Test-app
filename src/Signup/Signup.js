import React from 'react';
import AuthForm from '../CredenForm/AuthForm';

const Signup = () => {
	return (
		<section>
			<AuthForm
				display={true}
				label0="Name"
				label1="Email"
				label2="create password"
				label3="confirm password"
				status="signup"
			/>
		</section>
	);
};

export default Signup;
