import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {unFollow, follow, setCurrentPage, setFollowingProgress, requestUsers } from '../../redux/reducer_users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUsersSuperSelector } from '../../redux/users_selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize)
    }
    currentPage = (currentPage) => {
        this.props.requestUsers(Number(currentPage), this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                followingInProgress={this.props.followingInProgress}
                currentPage={this.currentPage}
                currentUsersPage={this.props.currentUsersPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                users={this.props.users} />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentUsersPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    withAuthRedirectComponent,
    connect(mapStateToProps, {unFollow, follow,
    setCurrentPage,
    setFollowingProgress, requestUsers})
)(UsersContainer)