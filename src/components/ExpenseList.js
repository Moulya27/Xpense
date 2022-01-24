import React from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import Card from './Card';
import styles from './ExpenseList.module.css';

const ExpenseList = () => {
    const {expenseList} = useSelector(state => state.expenses);
    //console.log(expenseList);
const totalAmount = expenseList.map((expense) => Number(expense.amount));
//console.log(totalAmount);
const total = totalAmount.reduce((acc,item) => acc+item,0);
    const {expenseList:list,query} = useSelector(state => state.expenses);
    const filteredList = list.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    //function to display toaster on succesfully deleting expense
    const notifySuccess = () => toast.success("Expense deleted",{theme:'colored'});
    return (
        <div className= {styles.expenseContainer}>
            <ToastContainer
position="bottom-left"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
/>
            {filteredList.length ? filteredList.map(item => (
                <Card item = {item} notifySuccess = {notifySuccess} />
            )): <div className={styles.emptyListImage}>
                <img src={require('../assets/empty.svg').default} alt='No expenses'/>
                <label>Uh Oh! Your expense list is empty</label>
                </div>}
                <div className={styles.totalAmount}>
                {filteredList.length ? <label>Total Expense: ₹ {total}</label>:''}
                </div>
                
        </div>
    )
}

export default ExpenseList
