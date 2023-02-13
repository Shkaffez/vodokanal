import React from 'react';
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.slideContainer}>
      <h3 className={styles.slideCaption}>Подбор и установка</h3>
      <p className={styles.slideBody}>Лучшие решения по полотенцесушителям</p>
      <p className={styles.slideFooter}>
        Широкий выбор полотенцесушителей с установкой под ключ.
        <br />
        Стандартные и дизайнерские модели по разумным ценам.
      </p>

    </div>
  )
}
