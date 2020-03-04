import { profileAPI } from "../api/api";

const ADD_POST = 'profile_reducer/ADD_POST';
const SET_USER_PROFILE = 'profile_reducer/SET_USER_PROFILE'
const SET_USER_STATUS = 'profile_reducer/SET_USER_STATUS'
const DELETE_POST = 'profile_reducer/DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'profile_reducer/SAVE_PHOTO_SUCCESS'

let initialState = {
    posts: [
        { id: 1, message: 'Hey doggy!', value: '5' },
        { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
        { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, { id: 4, message: action.newPost }]
            };
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case SET_USER_STATUS:
            return {
                ...state, status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
            }

        default: return state;
    }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost })
export const deletePostAC = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI
        .getProfile(userId)
    dispatch(setUserProfile(response));
}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI
        .getStatus(userId)
    dispatch(setUserStatus(response));
}
export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI
        .updateStatus(status)
    if (response.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI
        .savePhoto(file)
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.photos));
    }
}

export default profileReducer;