import React from 'react';
import styles from './Login.module.css';

const Login = () => {
	return (
		<section className="login">
			<form action="http://localhost:4000/login" method="POST">
				<div className={styles.form}>
					<h3 className={styles.form__title}> LOGIN </h3>
					<label>EMAIL</label>
					<input required type="text" className={styles.form__user} name="email" />
					<label>PASSWORD</label>
					<input required type="password" className={styles.form__pass} name="password" />
					<button>Submit</button>
				</div>
			</form>
		</section>
	);
};

export default Login;
