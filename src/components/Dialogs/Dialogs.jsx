import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'


const Dialogs = (props) => {

  

    let dialogsElements = props.dialogs.map (  d => <DialogItem name={d.name} id={d.id} />  );
    let messageElements = props.messages.map ( text => <Message text={text.message} /> );


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
               {dialogsElements}
               
            </div>
            <div className={styles.messages}>
            {messageElements}
            </div>
        </div>
    )
}

export default Dialogs