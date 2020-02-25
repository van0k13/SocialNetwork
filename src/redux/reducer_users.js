import { usersAPI } from '../api/api'
import { updateObjectInArray } from '../utils/objectsHelper';

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
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})

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
    return async (dispatch) => {
        dispatch(setCurrentPage(Number(page)))
        dispatch(setIsFetching(true))
        let response = await usersAPI
            .getUsers(page, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));
    }
}
const followUnfollowFlow = async (dispatch, UserId, apiMethod, actionCreator) => {
    dispatch(setFollowingProgress(true, UserId));
    let response = await apiMethod(UserId)
    if (response.resultCode === 0) {
        dispatch(actionCreator(UserId))
    }
    dispatch(setFollowingProgress(false, UserId));
}

export const unFollow = (UserId) =>
    async (dispatch) => {
        followUnfollowFlow(dispatch, UserId, usersAPI.unfollowUser, unFollowSuccess);
    }

export const follow = (UserId) =>
    async (dispatch) => {
        followUnfollowFlow(dispatch, UserId, usersAPI.followUser, followSuccess);
    }


export default usersReducer;