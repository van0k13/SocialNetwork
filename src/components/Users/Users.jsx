import React from 'react'
import Pagination from './Pagination';
import User from './User';

const Users = ({ portionSize, currentUsersPage, currentPage,
    totalUsersCount, pageSize, users, followingInProgress,
    unFollow, follow }) => {
    return (
        <div>
            <Pagination
                portionSize={portionSize}
                totalItemsCount={totalUsersCount}
                currentUsersPage={currentUsersPage}
                currentPage={currentPage}
                pageSize={pageSize}
            />
            {users.map(u => <User
                user={u}
                key={u.id}
                followingInProgress={followingInProgress}
                unFollow={unFollow}
                follow={follow} />)}
        </div>
    )
}

export default Users;