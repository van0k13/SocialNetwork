import PropTypes from 'prop-types';
import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/reducer_dialogs'
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
        sendMessage: (newMessage) => {
            dispatch(addMessageActionCreator(newMessage));
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