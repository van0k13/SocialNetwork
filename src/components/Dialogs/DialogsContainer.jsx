import React from 'react'
import PropTypes from 'prop-types';
import Dialogs from './Dialogs'
import { sendMessageTC, getDialogsTC } from '../../redux/reducer_dialogs'
import { connect } from 'react-redux';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';
import { dialogsAPI } from '../../api/api';


class DialogsContainer extends React.Component {
    componentDidMount() {
        dialogsAPI.getDialogs()
    }
    render() {
        return (
            <Dialogs {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default compose(
    connect(mapStateToProps, { sendMessageTC, getDialogsTC }),
    withAuthRedirectComponent
)(DialogsContainer)


Dialogs.propTypes = {
    dialogsPage: PropTypes.object
};