import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import skelet from '../../common/assets/skeletIcon.png'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return <div>
        {/* <div className={styles.bgImage}>
            <img  alt='' />
        </div> */}
        <div className={styles.descrBlock}>
            <img src={props.profile.photos.large? props.profile.photos.large: skelet} className={styles.bigPhoto}/><br/>
            Status: <ProfileStatus status={props.profile.aboutMe}/><br/>
            FullName: {props.profile.fullName}<br/>
            Contacts: {props.profile.contacts.facebook}<br/>
            LookingForAJob: {props.profile.lookingForAJob? 'Hire me!!!' : 'Not interesting in job seeking'}<br/>
            
        </div>
    </div>
    }

export default ProfileInfo;