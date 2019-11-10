import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img src="https://cs11.pikabu.ru/post_img/big/2018/05/26/6/1527327409144741434.png" alt='' />
        </div>
        <div className={styles.descrBlock}>ava + description</div>

    </div>
    }

export default ProfileInfo;