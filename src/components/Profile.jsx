import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './Profile/MyPosts/MyPosts';


const Profile = () => {
    return <div className={styles.content}>
        <div>
            <img src="https://cs11.pikabu.ru/post_img/big/2018/05/26/6/1527327409144741434.png" alt='' />
        </div>
        <div>ava + description</div>
        <MyPosts />

    </div>
}

export default Profile;