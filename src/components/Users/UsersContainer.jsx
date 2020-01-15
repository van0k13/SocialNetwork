import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, setIsFetching, setFollowingProgress } from '../../redux/reducer_users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        })
    }
    currentPage = (currentPage) => {
        this.props.setCurrentPage(Number(currentPage));
        this.props.setIsFetching(true);
        usersAPI.getUsers(currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsers(response.items);
        });
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                setFollowingProgress={this.props.setFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                currentPage={this.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                users={this.props.users}
                unFollow={this.props.unFollow}
                follow={this.props.follow} />
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


export default connect(mapStateToProps, {
    follow, unFollow, setUsers,
    setCurrentPage, setTotalUsersCount, setIsFetching,
    setFollowingProgress
})(UsersContainer)