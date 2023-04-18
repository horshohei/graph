import React from 'react';
import styles from './../styles/Terms.module.css';
import Link from "next/link";

const Terms = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>利用規約</h1>
      <p className={styles.description}>
        本ウェブサイトは、情報提供のみを目的としています。利用者は、本ウェブサイト上の情報を利用することによって生じるいかなる損害についても、当組織は責任を負わないものとします。
      </p>
      <p className={styles.description}>
        当組織は、本ウェブサイト上の情報の正確性、完全性、有用性、信頼性、適時性、安全性、または不侵害性を保証しません。また、本ウェブサイトの運営に関連して生じるいかなる損害についても、当組織は責任を負わないものとします。
      </p>
      <p className={styles.description}>
        利用者は、本ウェブサイトに掲載されている情報やサービスを利用することにより、本利用規約に同意したものとみなされます。当組織は、利用規約を予告なく変更する権利を留保します。変更後の利用規約は、本ウェブサイト上に掲載された時点で効力を生じます。
      </p>
      <Link className={styles.link} href="/about-us">Fake Guardian V2</Link>
    </div>
  );
};

export default Terms;
