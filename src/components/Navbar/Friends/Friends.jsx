import React from 'react';
import style from './Friends.module.css';


const Friends = ({ dialogs }) => {
    let friendsElements = dialogs.map(f =>
        <div className={style.imagWrapper} key={f.id}>
            <img alt='gav' className={style.imag}
                key={f.id} src={f.imag} />
            {f.name}</div>);
    return (
        <div className={style.friendsBar}>
            <div>
                <input placeholder='find your friends' />
                <button>Find</button>
            </div>
            <span>My Friends</span>
            <div className={style.friendsItems}>{friendsElements}</div>
        </div>
    )
}

export default Friends;