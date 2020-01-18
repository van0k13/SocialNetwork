import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import skelet from '../../common/assets/skeletIcon.png'


const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
    }
    return <div>
        <div className={styles.bgImage}>
            <img  alt='' />
        </div>
        <div className={styles.descrBlock}>
            <img src={props.profile.photos.large} /><br/>
            Status: {props.profile.aboutMe}<br/>
            FullName: {props.profile.fullName}<br/>
            Contacts: {props.profile.contacts.facebook}<br/>
            LookingForAJob: {props.profile.lookingForAJob? 'Yes, of course' : 'Just messing around'}<br/>
            ProfilePhoto: {props.profile.photos.small? props.profile.photos.small : skelet}
            
        </div>

    </div>
    }

export default ProfileInfo;