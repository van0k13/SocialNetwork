import React from 'react'
import { createField, Input, Textarea } from '../../common/FormsControl/FormsControl';
import styles from '../../common/FormsControl/FormsControl.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { reduxForm } from 'redux-form';


const ProfileDataForm = ({profile, updateUserStatus, status, handleSubmit, error }) => {
    return <form onSubmit={handleSubmit}>
        <div> <b> Status: </b> <ProfileStatusWithHooks
            updateUserStatus={updateUserStatus}
            status={status}
        />
        </div>
        <div>
            <b> Full Name:</b>
            {createField('Full name', 'fullname', [], Input)}
        </div>
        <div>
            <b> Looking Fo A Job:</b>
            {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
        </div>
        <div>
            <b> My Professional Skills:</b>
            {createField('My Professional Skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b> About Me:</b>
            {createField('About Me', 'aboutMe', [], Textarea)}
        </div>
        <div>
            <b>  Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div>
                    <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
                </div>
            })}
        </div>
        {error && <div className={styles.form_summary_control}>
            {error}
        </div>}
        <div><button>save</button></div>
    </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile' })(ProfileDataForm)
export default ProfileDataFormReduxForm;