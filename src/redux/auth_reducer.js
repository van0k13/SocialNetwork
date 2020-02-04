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
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (
    userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const setAuth = () => (dispatch) => {
    authAPI
        .authMe()
        .then(res => {
            if (res.resultCode === 0) {
                let { id, login, email  } = res.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI
        .logIn(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
               dispatch(setAuth())
            } 
        })
}
export const logout = () => (dispatch) => {
    authAPI
        .logOut()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;