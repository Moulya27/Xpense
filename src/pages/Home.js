import React from 'react'
import ExpenseList from '../components/ExpenseList'
import Topfold from '../components/Topfold'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className= {styles.home}>
            <Topfold />
            <ExpenseList />
        </div>
    )
}

export default Home
