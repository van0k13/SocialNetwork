import PropTypes from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer_dialogs'


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem imag={d.imag} name={d.name} id={d.id} />);
    let messageElements = props.dialogsPage.messages.map(text => <Message text={text.message} />);
    let newMessageText = props.dialogsPage.newMessageText;

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }
    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    };
    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                <div> {messageElements} </div>
                <div>
                    <div> <textarea value={newMessageText} placeholder='Please, enter your message'
                        onChange={onMessageChange} onKeyPress={onKeyPress}/> </div>
                    <div> <button  onClick={sendMessage}>sendMessage</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};