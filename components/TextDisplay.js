import React from 'react';
import styles from '@/components/styles/TextDisplay.module.css'

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
                      <img src={row.icon+".png"} width="20"/>
                    </figure>
                    <div className={styles.twitter__blocktext}>
                      <div className={styles.name}>{row.username}<span className={styles.name_reply}>{row.userid}</span></div>
                      <div className={styles.date}>{row.date}時間前</div>
                      <div className={styles.text}>
                          {row.text}
                      {/*
                        <div className={styles.inpict}>
                          <img src="sample.jpg" />
                        </div>
                        */}
                      </div>
                      <div class={styles.twitter__icon}>
                        <span class={styles.twitterbubble}>{row.favo}</span>
                        <span class={styles.twitterloop}>{row.retweet}</span>
                        <span class={styles.twitterheart}>{row.like}</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>
  );
}
