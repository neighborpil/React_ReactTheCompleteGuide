import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const changeYearHandler = (changedYear) => {
        setFilteredYear(changedYear);
        console.log(parseInt(filteredYear));
    }

    
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeYear={changeYearHandler}/>
                {props.items
                    .filter(expense => expense.date.getFullYear() === parseInt(filteredYear))
                    .map(expense => {
                    <ExpenseItem 
                        key={expense.id} 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}/>
                    })
                }
            </Card>
        </div>
        
    )
}

export default Expenses;