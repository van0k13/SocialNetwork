import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

let [editMode, setEditMode] = useState(false)
let [status, setStatus] = useState(props.status)

useEffect(()=> {
    setStatus(props.status)
}, [props.status])
const activateEditMode = () => {
    setEditMode(true)
}
const deActivateEditMode = () => {
    setEditMode(false)
    props.updateUserStatus(status)
}
const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
}

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode} >{props.status || '----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true}
                    onBlur={deActivateEditMode}
                    onChange={onStatusChange}
                    value={status}
                     />
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks;