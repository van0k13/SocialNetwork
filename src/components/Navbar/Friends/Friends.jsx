import React from 'react';
import styles from './Friends.module.css';


const Friends = (props) => {
    return (
        <div className={styles.friendsList}>
          
                <img src={props.image}
                    className={styles.imag}
                    alt='friends' />
                <span>{props.name}
                </span>
            </div>
      

    )
}

export default Friends;