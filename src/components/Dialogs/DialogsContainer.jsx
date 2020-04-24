import React from 'react'
import PropTypes from 'prop-types';
import Dialogs from './Dialogs'
import { initTC, updateDialogTC, sendMessageTC } from '../../redux/reducer_dialogs'
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';


class DialogsContainer extends React.Component {
    componentDidMount() {
        this.props.initTC(this.props.userId)
    }

    componentDidUpdate(prevProps) {
        if(prevProps.userId !== this.props.userId)
        this.props.updateDialogTC(this.props.userId)
    }
    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let mapState = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        selectedDialogId: state.dialogsPage.selectedDialogId,
        currentDialogMessagesCount: state.dialogsPage.currentDialogMessagesCount,
    }
}

export default compose(
    connect(mapState, { initTC, updateDialogTC, sendMessageTC }),
    withAuthRedirectComponent
)(DialogsContainer)


Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};