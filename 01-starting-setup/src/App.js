import Expenses from "./components/Expenses";

function App() {

	const expenses = [
		{ id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 7, 23)},
		{ id: 'e2', title: 'Car Insurance2', amount: 293.67, date: new Date(2022, 7, 22)},
		{ id: 'e3', title: 'Car Insurance3', amount: 290.67, date: new Date(2022, 7, 21)},
		{ id: 'e4', title: 'Car Insurance4', amount: 291.67, date: new Date(2022, 7, 20)},
	]

    return (
        <Expenses expenses={expenses}/>
    );
}

export default App;
