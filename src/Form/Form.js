import React from 'react';
import styles from './Form.module.css';

const Form = () => {
	return (
		<div className={styles.expense__form}>
			<form action="http://localhost:4000/submit" method="POST">
				<div className={styles.form__ele}>
					<h3 className={styles.form__title}>total expenses</h3>
					<label className={styles.form__label}>This Month</label>
					<input
						required
						type="number"
						className={styles.form__input}
						name="expense"
						placeholder="Total Expense"
					/>
					<input type="checkbox" className={styles.form__checkbox} />
					<span className={styles.form__ele__label}>Food</span>
					<input type="checkbox" className={styles.form__checkbox} />
					<span className={styles.form__ele__label}>Travel</span>
					<input type="checkbox" className={styles.form__checkbox} />
					<span className={styles.form__ele__label}>Clothes</span>
					<label className={styles.form__label}>Your Category</label>
					<input required type="text" className={styles.form__input} placeholder="Category" name="category" />
					<button className={styles.form__btn}>Save</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
