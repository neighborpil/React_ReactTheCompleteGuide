import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // }); // 이 방식을 쓰면 안됨
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value}
        // }); // 이 방식을 써야함. 항상 최신의 상태에서 변경시켜줌
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const exepnseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(exepnseData);
        
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    const closeHandler = (event) => {
        props.onCloseForm();
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" name="" id="" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" name="" id="" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2020-01-01" max="2022-12-31" name="" id="" value={enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={closeHandler}>Close</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )

};

export default ExpenseForm;