import React from 'react';
import styles from './AuthForm.module.css';
const AuthForm = (props) => {
	return (
		<form action="http://localhost:4000/register" method="POST">
			<div className={styles.form}>
				<h3 className={styles.form__title}> {props.status} </h3>
				<label>{props.label0}</label>
				<input autoComplete="false" required type="text" className={styles.form__user} name="name" />
				<label>{props.label1}</label>
				<input autoComplete="false" required type="text" className={styles.form__user} name="email" />
				<label>{props.label2}</label>
				<input autoComplete="false" required type="password" className={styles.form__pass} name="password" />
				<label>{props.label3}</label>
				<input autoComplete="false" type="password" className={styles.form__pass} name="confirmPassword" />
				<button>Submit</button>
			</div>
		</form>
	);
};

export default AuthForm;
