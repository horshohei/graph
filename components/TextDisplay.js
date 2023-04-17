import React from 'react';
import styles from './TextDisplay.module.css'

export function TextDisplay(props) {
  return (
    <div>
        <div className={styles.twitter__container}>
            <h2>{props.title}</h2>
            <div className={styles.twitter__title}>
                <span className={styles.twitterlogo}></span>
            </div>

            <div className={styles.twitter__scroll}>
              {props.text.map((row, rowIndex) => (
                  <div key={rowIndex} className={styles.twitter__block}>
                    <figure>
                      <img src="Anger.png" width="20"/>
                    </figure>
                    <div className={styles.twitter__blocktext}>
                      <div className={styles.name}>うさきち<span className={styles.name_reply}>@usa_tan</span></div>
                      <div className={styles.date}>1時間前</div>
                      <div className={styles.text}>
                          {row}
                      {/*
                        <div className={styles.inpict}>
                          <img src="sample.jpg" />
                        </div>
                        */}
                      </div>
                      <div class={styles.twitter__icon}>
                        <span class={styles.twitterbubble}>1</span>
                        <span class={styles.twitterloop}>4</span>
                        <span class={styles.twitterheart}>122</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  );
}
