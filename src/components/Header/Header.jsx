import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = ({isAuth, login, logout}) => {
    return <header className={styles.header}>
    <img alt='header' src="https://pm1.narvii.com/6802/be8edb4db56651cd4d4ddd201d5b6bde65152b89v2_128.jpg" />

    <div className={styles.loginBlock}>
        {isAuth 
        ? <div>{login} - <button onClick={logout}>{'LogOut'}</button></div>
        :<NavLink to={'/login'}>Login</NavLink>}
    </div>
</header>
}

export default Header;