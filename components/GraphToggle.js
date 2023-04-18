import React from 'react';
import styles from './styles/GraphToggle.module.css'

export function GraphToggle(props) {
  return (
    <div className={styles.btnspace}>
      <button className={styles.btn} onClick={() => props.onToggle('daily')}>Daily</button>
      <button className={styles.btn} onClick={() => props.onToggle('monthly')}>Monthly</button>
    </div>
  );
}

