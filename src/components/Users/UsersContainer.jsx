import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import {unFollow, follow, setCurrentPage, setFollowingProgress, getUsers } from '../../redux/reducer_users';
import Preloader from '../common/preloader/preloader';
import { compose } from 'redux';
import { withAuthRedirectComponent } from '../../HOC/WithAuthRedirect';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    currentPage = (currentPage) => {
        this.props.getUsers(Number(currentPage), this.props.pageSize)
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                followingInProgress={this.props.followingInProgress}
                currentPage={this.currentPage}
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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    withAuthRedirectComponent,
    connect(mapStateToProps, {unFollow, follow,
    setCurrentPage,
    setFollowingProgress, getUsers})
)(UsersContainer)