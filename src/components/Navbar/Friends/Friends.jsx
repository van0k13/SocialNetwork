import React from 'react';
import styles from './Friends.module.css';


const Friends = ({ image, name }) => {
    return (
        <div className={styles.friendsList}>
            <img src={image}
                className={styles.imag}
                alt='friends' />
            <span>{name}</span>
        </div>
    )
}

export default Friends;