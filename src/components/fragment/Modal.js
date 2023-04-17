import React from "react";
import styles from "../assets/scss/modal.module.css";
import Chat from "../fragment/Chat";
import {BiWindowClose} from "react-icons/bi"
const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal}>
       
          <BiWindowClose onClick={onClose} className={`${styles.btnClose} btn-close`}/>
          
       <Chat/>
      </div>
    </div>
  );
};

export default Modal;