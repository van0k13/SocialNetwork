import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile } from '../../redux/reducer_profile'
import { withRouter } from 'react-router-dom';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return (
            <Profile {...this.props}
                updateStatus={this.props.updateStatus}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto} />
        )
    }
}

let mapStateToProps = (state) => ({
    updateStatus: state.profilePage.profileUpdateStatus,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})
export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)