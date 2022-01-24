import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { categories } from "../constants/Dropdown";
import { addExpense } from "../redux/Actions";

import styles from "./AddForm.module.css";
import SuccessModal from "./SuccessModal";

const AddForm = () => {

    const dispatch = useDispatch();
  //For dropdown values
  const cat = categories;
  //state to open dropdown only when dropdown arrow is clicked
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState();
 const[isModalOpen,setIsModalOpen] = useState(false);
  const titleInputHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    const val = parseFloat(e.target.value);
    setAmount(val);
  };

  //to handle categories when clicked
const categoryHandler = (category) =>{
setCategory(category);
setCategoryOpen(false);
}
//To submit the category chosen on clicking add button

const submitHandler = () =>{
    if(!title || !amount || !category){
        const notify = () => toast.error("Please enter valid data",{theme:"colored"});
        notify();
        return;
    }
    const data = {
        title,
        amount,
        category,
        createdAt: new Date()
    }
    
    dispatch(addExpense(data));
    setIsModalOpen(true);
    console.log(data);
}
  return (
    <div className={styles.addForm}>
        <ToastContainer
position="bottom-left"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
/>
<SuccessModal isModalOpen = {isModalOpen} setIsModalOpen = {setIsModalOpen} />
      <div className={styles.expenseItem}>
        <label>Title</label>
        <input
          placeholder="Spent on"
          type="text"
          value={title}
          onChange={titleInputHandler}
        ></input>
      </div>
      <div className={styles.expenseItem}>
        <label>Amount ₹</label>
        <input
          className={styles.amount}
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={amountChangeHandler}
        ></input>
      </div>
      <div className={styles.categoryContainer}>
        <div className={styles.category}>
          <div className={styles.categoryDropdown} onClick={() => setCategoryOpen(!categoryOpen)}>
            <label>{category? category.title : `Category`}</label>
            <i className="fi fi-rr-angle-small-down"></i>
          </div>
          {categoryOpen && (
            <div className={styles.catContainer}>
              {cat.map((category) => {
              return(
                <div
                className={styles.categoryItem}
                style={{ borderRight: `5px solid ${category.color}` }}
                key={category.id} onClick={() =>categoryHandler(category)}
              >
                <label>{category.title}</label>
                <img src={category.icon.default} alt={category.title} />
              </div>
              )
              })}
            </div>
          )}
        </div>
      </div>
      <div className= {styles.formAddBtn}>
<div onClick={submitHandler}>
    <label>Add</label>
    <i className="fi fi-rr-paper-plane"></i>
</div>
      </div>
    </div>
  );
};

export default AddForm;
