import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';


const Navbar = (props) => {

    let friendsElements = props.friends.map(f => <Friends imag={f.imag} name={f.name}/> );

    return (
        <div className={styles.nav}>
            <nav className={styles.tabs}>
                <div className={styles.item}>
                    <NavLink to='/profile' activeClassName={styles.activeLink}>Profile</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/dialogs' activeClassName={styles.activeLink}>Messages</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/news' activeClassName={styles.activeLink}>News</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/music' activeClassName={styles.activeLink}>Music</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to='/settings' activeClassName={styles.activeLink}>Settings</NavLink>
                </div>

            </nav>
            <div className={styles.friendsBar}>
                <span>My Friends</span>
                <div className={styles.friendsItems}>{friendsElements}</div>
            </div>
        </div>
    )
}

export default Navbar;