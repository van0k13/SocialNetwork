import React from 'react';
import styles from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profile, updateStatus, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {

    return <div className={styles.profileBlock}>
        <ProfileInfo profile={profile}
            updateStatus={updateStatus}
            saveProfile={saveProfile}
            isOwner={isOwner}
            savePhoto={savePhoto}
            status={status}
            updateUserStatus={updateUserStatus} />
        <MyPostsContainer />

    </div>
}

export default Profile;