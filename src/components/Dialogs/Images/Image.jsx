import React from 'react'
import styles from './Image.module.css'
import cat from '../../../redux/avatars/kot.jpg'




const Image = (props) => {
    
    return (
        <div backgroundImage className={styles.imag}>
            <img src='/src/redux/avatars/dog.png'  alt='picter'/>
        </div>
    )
}

export default Image