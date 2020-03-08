import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profile, updateStatus, status, updateUserStatus, isOwner, savePhoto, saveProfile }) => {

    return <div>
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