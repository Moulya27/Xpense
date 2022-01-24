import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import styles from './SuccessModal.module.css';
const SuccessModal = ({isModalOpen,setIsModalOpen}) => {
  Modal.setAppElement('#root');
    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          padding: '3rem',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '12px'
        },
      };
  return <div>
    <Modal isOpen = {isModalOpen} style={customStyles}>
<div className={styles.modalInner}>
<label>Expense Added Succesfully</label>
<img className = {styles.addedImage} src = {require('../assets/success-modal.svg').default} alt='Expense added successfull'/>
<Link to = '/'>
<div className={styles.homeBtn}>
<i className="fi fi-rr-home"></i>
Home
</div>
</Link>
</div>
    </Modal>
  </div>;
};

export default SuccessModal;
