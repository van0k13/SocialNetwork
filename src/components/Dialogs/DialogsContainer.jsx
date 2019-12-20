import PropTypes from 'prop-types';
import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer_dialogs'
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer

Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};