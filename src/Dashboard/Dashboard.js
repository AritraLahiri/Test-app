import React, { useEffect, useState } from 'react';
import styles from './Dashboard.module.css';
import Axios from '../axios';
const Dashboard = () => {
	const [ expenses, setExpenses ] = useState([]);

	useEffect(
		() => {
			Axios.get('/show')
				.then((res) => {
					setExpenses(res.data);
				})
				.catch((e) => console.log(e));
		},
		[ expenses ]
	);

	console.log(expenses);
	let expenseSummary;

	if (expenses.length > 0) {
		expenseSummary = expenses.map((ele) => {
			return (
				<main className={styles.container} key={ele._id}>
					<div className={styles.category}>
						<h1> {ele.category}</h1>
					</div>

					<div className={styles.spending}>
						<h1>{ele.expenses}</h1>
					</div>
					<div className={styles.time}>
						<h1>Time</h1>
					</div>
				</main>
			);
		});
	} else {
		expenseSummary = null;
	}

	return (
		<section className={styles.dashboard}>
			<h1 className={styles.dashboard__greet}>Hello Aritra </h1>
			{expenseSummary}
			{/* <main className={styles.container}>
				<div className={styles.category}>
					<h1>Categories List</h1>
				</div>

				<div className={styles.spending}>
					<h1>Total Spendings</h1>
				</div>
				<div className={styles.time}>
					<h1>Time</h1>
				</div>
			</main> */}
		</section>
	);
};

export default Dashboard;
