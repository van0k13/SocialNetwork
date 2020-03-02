import {createSelector} from 'reselect'

const getUsers = (state) => {    // примитивный селектор для того чтобы мы могли  перекинуть стейт в селектор поумнее
    return state.usersPage.users
}
// export const getUsersSelector = (state) => {   =======>   // селектор поумнее для того чтобы перекинуть в супер селектор
//     return getUsers(state).filter(u => true)
// }
export const getUsersSuperSelector = createSelector(getUsers, (users) => {  // супер селектор. умнейшее селектированное существо
   return users.filter(u => true)
}) 
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return Number(state.usersPage.currentPage)
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getPortionSize = (state) => {
    return state.usersPage.portionSize
}
