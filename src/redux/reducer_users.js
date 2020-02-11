import { usersAPI } from '../api/api'

const FOLLOW = 'userReducer/FOLLOW';
const UNFOLLOW = 'userReducer/UNFOLLOW';
const SET_USERS = 'userReducer/SET_USERS';
const SET_CURRENT_PAGE = 'userReducer/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'userReducer/SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'userReducer/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'userReducer/TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }

        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.usersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, usersCount });
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(Number(page)))
        dispatch(setIsFetching(true))
        usersAPI
            .getUsers(page, pageSize)
            .then(response => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            })
    }
}
export const unFollow = (UserId) => (dispatch) => {
    dispatch(setFollowingProgress(true, UserId));
    usersAPI
        .unfollowUser(UserId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unFollowSuccess(UserId))
            }
            dispatch(setFollowingProgress(false, UserId));
        })
}

export const follow = (UserId) => (dispatch) => {
    dispatch(setFollowingProgress(true, UserId));
    usersAPI
        .followUser(UserId)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(followSuccess(UserId))
            }
            dispatch(setFollowingProgress(false, UserId));
        })
}


export default usersReducer;