import React, { useState } from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import skelet from '../../common/assets/skeletIcon.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ profile, updateStatus, updateUserStatus, status, isOwner, savePhoto, saveProfile }) => {
    let [editMode, setEditMode] = useState(false)
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deActivateEditMode = () => {
        setEditMode(false)
    }
    if (!profile) {
        return <Preloader />
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        saveProfile(formData)
        if(updateStatus) {deActivateEditMode()}
        
    }
    return <div>
        <div className={styles.descrBlock}>
            <img
                alt='nothing'
                src={profile.photos.large || skelet}
                className={styles.bigPhoto}
            />
            {isOwner && <input type={'file'} onChange={mainPhotoSelected} />}
            <br />
            {!editMode
                ? <ProfileData
                    isOwner={isOwner}
                    updateUserStatus={updateUserStatus}
                    status={status}
                    profile={profile}
                    activateEditMode={activateEditMode} />
                : <ProfileDataForm
                    onSubmit={onSubmit}
                    initialValues={profile}
                    profile={profile}
                    updateUserStatus={updateUserStatus}
                    status={status} />
            }
        </div>
    </div>
}

const ProfileData = ({ isOwner, profile, updateUserStatus, status, activateEditMode }) => {
    return <div>
        <div> <b> Status: </b> <ProfileStatusWithHooks
            updateUserStatus={updateUserStatus}
            status={status}
        />
        </div>
        <div>
            <b> Full Name:</b>
            {profile.fullName}
        </div>
        <div>
            <b> Looking For A Job:</b>
            {profile.lookingForAJob ? 'Hire me!!!' : 'Not interesting in job seeking'}
        </div>
        <div>
            <b> My Professional Skills:</b>
            {profile.lookingForAJobDescription}
        </div>
        <div>
            <b> About Me:</b>
            {profile.aboutMe}
        </div>
        <div>
            <b>  Contacts: {isOwner && <div><button onClick={activateEditMode}>edit</button></div>}</b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}


export const Contact = ({ contactTitle, contactValue }) => {
    if(contactValue !== null) {
        return <div><b>- {contactTitle}</b>: {contactValue}</div>
    } else return null
    
}
export default ProfileInfo;