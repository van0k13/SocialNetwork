import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = ({ profile, status, updateUserStatus, isOwner, savePhoto }) => {

    return <div>
        <ProfileInfo profile={profile}
            isOwner={isOwner}
            savePhoto={savePhoto}
            status={status}
            updateUserStatus={updateUserStatus} />
        <MyPostsContainer />

    </div>
}

export default Profile;