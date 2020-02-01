import PropTypes from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs
        .map(d => <DialogItem key={d.id}
                              imag={d.imag}
                              name={d.name}
                              id={d.id}
        />);
    let messageElements = state.messages
        .map(text => <Message key={text.id}
                              text={text.message}
        />);


   let addNewMessage = (values) => {
        props.sendMessage(values.newMessage)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div> {messageElements} </div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
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
const AddMessageReduxForm = reduxForm({form: 'dialogs'})(AddMessageForm)

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};