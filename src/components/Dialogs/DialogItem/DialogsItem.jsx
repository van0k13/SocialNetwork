import React from 'react'
import styles from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = ({id, imag, name, newMessage}) => {
    let ident = `/dialogs/${id}`
    return (
        <div className={styles.wrapper}>
            <NavLink to={ident}><img src={imag}
              className={styles.imag} alt='avatar ' />{newMessage ? name + 'New Message' : name}</NavLink>
        </div>
    )
}

export default DialogItem;