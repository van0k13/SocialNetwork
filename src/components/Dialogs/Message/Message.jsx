import React from 'react'
import styles from './Message.module.css'




const Message = ({text, who, viewed}) => {
    return (
        <div className={styles.message}>
           {who}:  {text} {!viewed? <span className={styles.noRead}>-</span> : <span className={styles.noRead}>+</span>}
        </div>
    )
}

export default Message