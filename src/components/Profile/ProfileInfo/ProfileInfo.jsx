import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import skelet from '../../common/assets/skeletIcon.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

const ProfileInfo = ({profile, updateUserStatus, status, }) => {
    if (!profile) {
        return <Preloader />
    }
    return <div>
        <div className={styles.descrBlock}>
            <img
                alt='nothing'
                src={profile.photos.large ? profile.photos.large : skelet}
                className={styles.bigPhoto}
            /><br/>
            Status:
            <ProfileStatusWithHooks
                updateUserStatus={updateUserStatus}
                status={status}
            /><br/>
            FullName:
            {profile.fullName}
            <br/>
            Contacts:
            {profile.contacts.facebook}
            <br/>
            LookingForAJob:
            {profile.lookingForAJob ? 'Hire me!!!' : 'Not interesting in job seeking'}
            <br/>

        </div>
    </div>
}

export default ProfileInfo;