import React, { useState } from 'react';
import styles from './topScrollButton.module.css';

export default function TopScrollButton() {

    const [hidden, setHidden] = useState(true);
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 300 ? setHidden(false) : setHidden(true);
    });

    const clickHandler = () => {
        window.scrollTo({
            top: 0,
            left: 0,
        });
    }


    return (
        <button hidden={hidden} onClick={clickHandler} className={styles.btnUp}></button>
    )
}
