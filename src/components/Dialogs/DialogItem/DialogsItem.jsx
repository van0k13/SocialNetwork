import React from 'react'
import styles from '../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let id = '/dialogs/' + props.id
    return (
        <div className={styles.dialogsBody + ' ' + styles.active}>
            <NavLink to={id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem