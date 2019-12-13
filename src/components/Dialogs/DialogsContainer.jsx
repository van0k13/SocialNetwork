import PropTypes from 'prop-types';
import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer_dialogs'


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
      <Dialogs updateNewMessageBody={onMessageChange} sendMessage={sendMessage}
                dialogsPage={state}/>
    )
}

export default DialogsContainer

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};