import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../redux/Actions";
import styles from "./Topfold.module.css";
const Topfold = () => {
    //to store the input value
    const [input, setinput] = useState('');
    //dispatch to search expense
    const dispatch = useDispatch();
const inputHandler = (e) => {
    console.log(e.target.value);
    setinput(e.target.value);
    dispatch(searchExpense(e.target.value));
}

  return (
    <div className={styles.topfold}>
        {window.location.pathname === '/' ? <div className={styles.homeTopfold}>
        <div className={styles.searchBar}>
          <i className="fi fi-rr-search"></i>
          <input
            placeholder="Search for expenses"
            type="text" value={input}
            onChange={inputHandler}
          />
        </div>
        <Link to = '/add-expense'>
        <div className={styles.addButton}>
        <i className="fi fi-rr-add"/>
        <label>Add</label>
        </div>
        </Link>
      </div> : <div className={styles.addExpense}>
    <Link to = '/'>    
<div className={styles.back}>
<i className="fi fi-rr-angle-small-left"></i>
<label>Back</label>
</div>
</Link>  
<Link to = '/'>
<div className={styles.cancel}>
<i className="fi fi-rr-cross-circle"></i>
<label>Cancel</label>
    </div>
    </Link>
      </div> }
  
    </div>
  );
};

export default Topfold;
