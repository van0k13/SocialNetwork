import React from 'react';
import styles from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={styles.friendsList}>
          
                <img src={props.imag}
                    className={styles.imag}
                    alt='picture' />
                <span>{props.name}
                </span>
            </div>
      

    )
}

export default Friends;