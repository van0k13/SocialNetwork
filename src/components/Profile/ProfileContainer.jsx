import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/reducer_profile'
import { withRouter } from 'react-router-dom';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = 5479
        }
       this.props.getUserProfile(userId)
       this.props.getUserStatus(userId)
    }
    render() {
        return (
                <Profile {...this.props}
                         profile={this.props.profile}
                          status={this.props.status}
                          updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirectComponent
)(ProfileContainer)