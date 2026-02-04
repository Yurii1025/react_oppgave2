import { useState } from 'react';
import styles from './CookieClicker.module.css';
import Cookie from '/cookie.png'

const CookieClicker = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className={styles.cookie_container}>
                <h2 className={styles.cookie_header}>Welcome to Cookie Clicker</h2>
                <p className={styles.cookie_text}>Relieve stress - click on a cookie!</p>
                <div className={styles.img_btn_container}>
                    <img className={styles.cookie_image} src={Cookie} alt="cookie image" onClick={() => setCount((count) => count + 1)}/>
                    <div className={styles.count}>Number of clicks <span>{count}</span></div>
                    <button className={styles.reset_btn} onClick={() => setCount(0)}>Reset</button>
                </div>
                
            </div>
        </>
    );
};

export default CookieClicker;