import React from 'react';
import styles from '@/components/styles/Popup.module.css';

const Popup = ({ children, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Popup;
