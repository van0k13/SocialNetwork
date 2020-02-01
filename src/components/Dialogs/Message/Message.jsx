import React from 'react'
import styles from '../Dialogs.module.css'




const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.text}
        </div>
    )
}

export default Message