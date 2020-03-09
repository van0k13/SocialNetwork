import React from 'react'
import skelet from '../common/assets/skeletIcon.png'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom';

const User = ({ user, followingInProgress, unFollow, follow}) => {
    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img alt='nothing' src={user.photos.small !== null 
                            ? user.photos.small 
                            : skelet} 
                            className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unFollow(user.id)
                            }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                follow(user.id);
                            }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                {/* <span>
                    <div>{user.location.city}</div>
                    <div>{user.location.country}</div>
                </span> */}
            </span>
        </div>
    )
}

export default User;