import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom'
import Friends from './Friends/Friends';
import kot from '../../redux/avatars/kot.jpg'
import dog from '../../redux/avatars/dog.png'
import bear from '../../redux/avatars/bear.png'
import slon from '../../redux/avatars/elephant.png'
import mouse from '../../redux/avatars/mouse.png'
import shit from '../../redux/avatars/shit.png'


const Navbar = () => {
    let state = {
        dialogs: [
            { id: 1, name: 'Koti', image: kot},
            { id: 2, name: 'Sobaki', image: dog},
            { id: 3, name: 'Snoli', image: bear},
            { id: 4, name: 'Medvedi', image: slon},
            { id: 5, name: 'Mouse', image: mouse},
            { id: 6, name: 'Boolshiti', image: shit}
        ]
    }

    let friendsElements = state.dialogs.map(f => <Friends key={f.id} image={f.image} name={f.name}/> );

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
                    <NavLink to='/users' activeClassName={styles.activeLink}>Users to Find</NavLink>
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