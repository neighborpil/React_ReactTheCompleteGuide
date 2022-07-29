import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeYearHandler = (changedYear) => {
        setFilteredYear(changedYear);
        console.log(parseInt(filteredYear));
    }
    
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    // let expensesContent = (<p>No expenses found.</p> );

    // if(filteredExpenses.length > 0) {
    //     expensesContent = filteredExpenses.map(expense => ( 
    //         <ExpenseItem 
    //             key={expense.id} 
    //             title={expense.title} 
    //             amount={expense.amount} 
    //             date={expense.date}/>
    //     ));
    // }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeYear={changeYearHandler}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
                {/* {expensesContent} */}
                {/* {filteredExpenses.length === 0 && (<p>No expenses found.</p> )}
                {filteredExpenses.length > 0 && (
                    filteredExpenses
                        .map(expense => ( 
                            <ExpenseItem 
                                key={expense.id} 
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date}/>
                        ))
                )} */}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p> 
                ) : (
                    filteredExpenses
                        .map(expense => ( 
                            <ExpenseItem 
                                key={expense.id} 
                                title={expense.title} 
                                amount={expense.amount} 
                                date={expense.date}/>
                        ))
                )} */}
            </Card>
        </div>
        
    )
}

export default Expenses;