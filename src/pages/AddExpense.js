import React from 'react'
import styles from './AddExpense.module.css';
import Topfold from '../components/Topfold'
import AddForm from '../components/AddForm';

const AddExpense = () => {
    return (
        <div>
           <Topfold />
           <AddForm />
        </div>
    )
}

export default AddExpense
