import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'profile_reducer/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile_reducer/SET_USER_STATUS'

let initialState = {
    posts: [
        { id: 1, message: 'Hey doggy!', value: '5' },
        { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
        { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let actualMessage = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 4, message: actualMessage }]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }

        default: return state;
    }
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI
        .getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
}
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI
        .getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response));
        })
}
export const updateUserStatus = (status) => (dispatch) => {
    profileAPI
        .updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export default profileReducer;