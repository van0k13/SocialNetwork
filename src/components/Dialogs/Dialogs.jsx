import React from 'react'
import PropTypes from 'prop-types';
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogsItem'
import Message from './Message/Message'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem imag={d.imag} name={d.name} id={d.id} />);
    let messageElements = props.messages.map(text => <Message text={text.message} />);

    let dialogInput = React.createRef()

    let sendMessage = () => {
        props.addMessage();

    }

    let onMessageChange = () => {
        let text = dialogInput.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsList}>
                {dialogsElements}
            </div>
            <div className={styles.messages}>
                {messageElements}
                <div>
                    <textarea value={props.newMessageText}
                        onChange={onMessageChange} ref={dialogInput} />
                    <button onClick={sendMessage}>sendMessage</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};