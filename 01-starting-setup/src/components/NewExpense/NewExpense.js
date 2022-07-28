import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {

    const [open, setOpen] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setOpen(false);
    }

    const openNewExpenseHandler = () => {

        setOpen(true);
    }

    const closeFormHandler = () => {
        setOpen(false);
    }


    if(!open) {
        return (
            <div className="new-expense">
                <button onClick={openNewExpenseHandler}>Add New Expense</button>
            </div>
        )
    }


    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCloseForm={closeFormHandler}/>
        </div>
    )
};

export default NewExpense;