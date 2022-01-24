import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../redux/Actions";
import styles from "./Card.module.css";
const Card = ({ item ,notifySuccess}) => {
    const time = moment(item.createdAt).fromNow();
    //dispatching the DELETE_EXPENSE from store
    const dispatch = useDispatch();

    const deleteHandler = () =>{
        dispatch(deleteExpense(item));
        notifySuccess();
    }
 
  return (
    <div
      className={styles.cardContainer}
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className={styles.cardImageContainer}>
        <img
          src={item.category.icon.default}
          alt={item.category.title}
          className={styles.cardImage}
        />
      </div>
      <div className= {styles.cardInfo}>
<label className={styles.cardTitle}>{item.title}</label>
<label className={styles.cardTime}>{time}</label>
      </div>
      <div className={styles.cardRight}>
<div>
    <label className={styles.cardAmount}>₹ {item.amount}</label>
</div>
<div className={styles.deleteIcon} onClick={deleteHandler}>
<i class="fi fi-rr-trash"></i>
</div>

      </div>
    </div>
    
  );
};

export default Card;
