import PropTypes from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import { Field, reduxForm } from "redux-form";
import { Textarea } from '../common/FormsControl/FormsControl';
import { requiredField, maxLengthCreator } from '../../utils/validators/validator';

let maxLength50 = maxLengthCreator(100)
const Dialogs = ({ currentDialogMessagesCount,
    sendMessageTC, dialogs, messages, selectedDialogId, userId }) => {
    let dialogsElements = dialogs
        .map(d => <DialogItem key={d.id}
            newMessage={d.hasNewMessages}
            imag={d.photos.small}
            name={d.userName}
            id={d.id}
        />);
    let messageElements = messages
        .map(text => <Message key={text.id}
            who={text.senderName}
            viewed={text.viewed}
            text={text.body}
        />);


    let addNewMessage = (values) => {
        sendMessageTC(userId, values.newMessage)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElements}
            </div>
            {!selectedDialogId && <div>Please select your dialog</div>}
            {selectedDialogId &&
                <div className={styles.messages}>
                    {
                        messages.length < currentDialogMessagesCount
                        && <button>show prev messages...</button>
                    }
                    <div> {messageElements} </div>
                    <AddMessageReduxForm onSubmit={addNewMessage} />
                </div>
            }
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[requiredField, maxLength50]}
                    placeholder='Please, enter your message'
                    name={"newMessage"}
                />
            </div>
            <div>
                <button>sendMessage</button>
            </div>
        </form>
    )
}
const AddMessageReduxForm = reduxForm({ form: 'dialogs' })(AddMessageForm)

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};