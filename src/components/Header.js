import React from 'react'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className= {styles.headerContainer}>
            <div className = {styles.header}>
<div className = {styles.logo}>
    Xpense.<i className="fi fi-rr-credit-card"></i>
</div>
<div className= {styles.headerButton}>
<a href = 'https://www.linkedin.com/in/moulya-ramesh/' target = '_blank' rel='noopener noreferrer'>
<i className="devicon-linkedin-plain"></i>
</a>
</div>
            </div>
        </div>
    )
}

export default Header
