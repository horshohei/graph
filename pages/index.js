import React from 'react';
import {Main} from '@/components/Main.js'
import styles from '@/styles/Home.module.css';
import Header from "@/components/Header";

function App() {

  return (
    <div className={styles.main}>
        <Header />
        <Main />
    </div>
  );
}

export default App;
