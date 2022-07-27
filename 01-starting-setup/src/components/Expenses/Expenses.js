import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (props) => {

    const items = props.items;
    const [filteredYear, setFilteredYear] = useState('2020');

    const changeYearHandler = (changedYear) => {
        setFilteredYear(changedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeYear={changeYearHandler}/>
                {props.items.map(expense => 
                    <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>
                )}
            </Card>
        </div>
        
    )
}

export default Expenses;