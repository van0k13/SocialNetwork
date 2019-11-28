import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'


const Navbar = (props) => {
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
                My Friends
                <div className={styles.friendsList}>
                    <div >
                        <img className={styles.kot} />
                        <span>Kot</span>
                    </div>
                    <div >
                        <img className={styles.sobaka} />
                        <span>sobaka</span>
                    </div>
                    <div >
                        <img className={styles.bear} />
                        <span>Medved</span>
                    </div>
                    <div >
                        <img className={styles.slon} />
                        <span>slon</span>
                    </div>
                    <div >
                        <img className={styles.mouse} />
                        <span>mouse</span>
                    </div>
                    <div >
                        <img className={styles.shit} />
                        <span>shit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;