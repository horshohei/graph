import React from 'react';
import Link from "next/link";
import styles from '.@/styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Fake Guardian V2について</h1>
      <p className={styles.description}>
        Fake Guardian V2は、世界の平和と調和を守るために活動する組織です。私たちは政治や宗教の枠を超えて、地球の持続可能な未来を築くために働いています。
      </p>
      <p className={styles.description}>
        私たちの活動は一般の人々からは見えない形で行われます。しかし、その目的は全ての人類に利益をもたらすものであり、世界をより良い場所にするための影の立役者として存在しています。
      </p>
        <Link className={styles.link} href="/terms">利用規約</Link>
    </div>
  );
};

export default AboutUs;
