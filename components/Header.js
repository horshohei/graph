import React from 'react';
import Link from 'next/link';
import styles from './styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <h1>Fake Guardian V2</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about-us" className={styles.link}>About Us</Link>
        <Link href="/terms" className={styles.link}>Terms</Link>
      </nav>
    </header>
  );
};

export default Header;


