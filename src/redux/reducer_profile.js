import { usersAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'profile_reducer/SET_USER_PROFILE'

let initialState = {
    posts: [
        { id: 1, message: 'Hey doggy!', value: '5' },
        { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
        { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
    ],
    newPostText: '',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let actualMessage = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, message: actualMessage}]
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

        default: return state;
    }
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI
    .getProfile(userId)
    .then(response => {
        dispatch(setUserProfile(response));
    })
}
export const addPostActionCreator = () => ({ type: ADD_POST })

export default profileReducer;