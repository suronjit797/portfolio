import React from 'react';
import styles from '../styles/Left.module.css'
import { FiLinkedin, FiFacebook, FiGithub, FiTwitter, FiCodepen } from 'react-icons/fi';

const Left = () => {
    return (
        <div className={styles.left}>
            <a href="#" target='_blank'> <FiFacebook className={styles.icons} /> </a>
            <a href="#" target='_blank'> <FiGithub className={styles.icons} /> </a>
            <a href="#" target='_blank'> <FiLinkedin className={styles.icons} /> </a>
            <a href="#" target='_blank'> <FiTwitter className={styles.icons} /> </a>
            <a href="#" target='_blank'> <FiCodepen className={styles.icons} /> </a>
            <div className={styles.line}></div>
        </div>
    );
};

export default Left;