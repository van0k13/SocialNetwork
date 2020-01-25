import PropTypes from 'prop-types';
import React from 'react';
import Dialogs from './Dialogs'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/reducer_dialogs'
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';


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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirectComponent
)(Dialogs)


Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};