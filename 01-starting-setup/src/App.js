import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {

	const expenses = [
		{ id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 7, 23)},
		{ id: 'e2', title: 'Car Insurance2', amount: 293.67, date: new Date(2022, 7, 22)},
		{ id: 'e3', title: 'Car Insurance3', amount: 290.67, date: new Date(2022, 7, 21)},
		{ id: 'e4', title: 'Car Insurance4', amount: 291.67, date: new Date(2022, 7, 20)},
	]

	return (
		<div>
			<NewExpense />
	        <Expenses items={expenses}/>
		</div>
    );

	/* This is the reason why return just one element. */
	// return React.createElement(
	// 	'div', 
	// 	{}, 
	// 	React.createElement('h2', {}, "Let's get started!"),
	// 	React.createElement(Expenses, {items: expenses})
	// );
    
}

export default App;
