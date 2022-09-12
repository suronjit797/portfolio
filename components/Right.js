import React from 'react';
import styles from '../styles/Right.module.css'

const Right = () => {
    return (
        <div className={styles.right}>
            <a className={styles.mail} href="mailto:suronjit797@gmail.com"> suronjit797@gmail.com </a>
            <div className={styles.line}></div>
        </div>
    );
};

export default Right;