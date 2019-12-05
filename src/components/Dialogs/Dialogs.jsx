import PropTypes from 'prop-types';
import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'


const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem imag={d.imag} name={d.name} id={d.id} />);
    let messageElements = props.messages.map(text => <Message text={text.message} />);

    let dialogInput = React.createRef()

    let sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        
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
                    <div> <textarea value={props.newMessageText} placeholder='Please, enter your message'
                        onChange={onMessageChange} ref={dialogInput} /> </div>
                    <div> <button onClick={sendMessage}>sendMessage</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};