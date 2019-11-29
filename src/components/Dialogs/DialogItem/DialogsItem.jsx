import React from 'react'
import styles from './DialogsItem.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {
    let id = '/dialogs/' + props.id
    return (
        <div>
            <NavLink to={id}><img src={props.imag}
              className={styles.imag}
              alt='picture' />{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;