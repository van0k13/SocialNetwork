import React from 'react'
import styles from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let id = '/dialogs/' + props.id
    return (
        <div className={styles.dialogsBody + ' ' + styles.active}>
            <NavLink to={id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={styles.message}>{props.text}
        </div>
    )
}
const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Koti' },
        { id: 2, name: 'Sobaki' },
        { id: 3, name: 'Snoli' },
        { id: 4, name: 'Medvedi' },
        { id: 5, name: 'Mouse' },
        { id: 6, name: 'Boolshiti' }
    ]
    let messages = [
        {message: 'hi'},
        {message: 'So what the big fucking deal?!'},
        {message: 'What the fuck are you doing right here ?!'}
    ]


    let dialogsElements = dialogs.map (  d => <DialogItem name={d.name} id={d.id} />  );
    let messageElements = messages.map ( text => <Message text={text.message} /> );


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