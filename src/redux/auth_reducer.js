import {  authAPI } from '../api/api'
const SET_USER_DATA = 'authReducer/SET_USER_DATA';



let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (
    userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export const setAuth = () => (dispatch) => {
    authAPI
        .authMe()
        .then(res => {
            if (res.resultCode === 0) {
                let { id, email, login } = res.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
}





export default authReducer;