import PropTypes from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {
    debugger
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} imag={d.imag} name={d.name} id={d.id} />);
    let messageElements = state.messages.map(text => <Message key={text.id} text={text.message} />);
    let newMessageText = state.newMessageText;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            onSendMessageClick();
        }
    };
    let onMessageChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewMessageBody(text);
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
                    <div> <button  onClick={onSendMessageClick}>sendMessage</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};