import React, { useState } from 'react';
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [enteredYear, setEnteredYear] = useState('2020');
    const saveExpenseFilterHandler = (enteredYearData) => {
        setEnteredYear(enteredYearData);
    }
    const result = props.expenses.filter(expense => { return expense.date.getFullYear().toString() === enteredYear });

    return <div>
        <Card className="expenses">
            <ExpensesFilter selectedYear={enteredYear} onExpenseFilterData={saveExpenseFilterHandler} />
            <ExpensesChart expenses={result} />
            <ExpensesList item={result} />
        </Card>
    </div>
}

export default Expenses;