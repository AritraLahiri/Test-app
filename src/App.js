import './App.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Dashboard from './Dashboard/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				{/* NAVBAR CONTAINING LOGIN AND SIGNUP */}
				<Navbar />

				{/* 
					FORM CONTAINING:
					1.INPUT FOR EXPENSES
					2.LABEL FOR INBUILT CATEGORY
					3.CREATE CUSTOM CATEGORY BY INPUT */}

				{/* <Form /> */}
				<Route path="/" exact component={Form} />

				{/* LOGIN FORM */}
				<Route path="/login" exact component={Login} />

				{/* SIGNUP FORM */}
				<Route path="/signup" exact component={Signup} />
				{/* <Login /  > */}
				{/* <Signup /> */}

				{/* USER DASHBOARD */}
				<Route path="/dashboard" exact component={Dashboard} />
			</div>
		</BrowserRouter>
	);
}

export default App;
