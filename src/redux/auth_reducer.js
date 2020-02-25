import {  authAPI } from '../api/api'
import { stopSubmit } from 'redux-form';
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

export const setAuthUserData = ( userId, email, login, isAuth) => ({
     type: SET_USER_DATA, payload: { userId, email, login, isAuth } 
    });

export const setAuth = () => async (dispatch) => {
  const res = await authAPI
        .authMe();
    if (res.resultCode === 0) {
        let { id, login, email } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe) => async (dispatch) => {
    const res = await authAPI
        .logIn(email, password, rememberMe)
            if (res.resultCode === 0) {
               dispatch(setAuth())
            } else {
                let message = res.messages.length > 0 ? res.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: message}))
            }
}
export const logout = () => async(dispatch) => {
   let res = await authAPI
        .logOut()
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
}

export default authReducer;