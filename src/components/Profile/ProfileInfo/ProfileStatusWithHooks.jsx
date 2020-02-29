import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = ({status, updateUserStatus}) => {

let [editMode, setEditMode] = useState(false)
let [userStatus, setStatus] = useState(status)

useEffect(()=> {
    setStatus(status)
}, [status])
const activateEditMode = () => {
    setEditMode(true)
}
const deActivateEditMode = () => {
    setEditMode(false)
    updateUserStatus(userStatus)
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}
    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                    onBlur={deActivateEditMode}
                    onChange={onStatusChange}
                    value={userStatus}
                     />
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;