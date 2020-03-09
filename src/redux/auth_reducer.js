import { authAPI, securityAPI } from '../api/api'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'authReducer/SET_USER_DATA';
const GET_CAPTCHA_URL = 'authReducer/GET_CAPTCHA_URL';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA, payload: { userId, email, login, isAuth }
});
const getCaptchaAC = (captchaUrl) => ({ type: GET_CAPTCHA_URL, payload: { captchaUrl } })

export const setAuth = () => async (dispatch) => {
    const res = await authAPI
        .authMe();
    if (res.resultCode === 0) {
        let { id, login, email } = res.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await authAPI
        .logIn(email, password, rememberMe, captcha)
    if (res.resultCode === 0) {
        dispatch(setAuth())
    } else {
        if (res.resultCode === 10) {
            dispatch(getCaptcha());
        }
        let message = res.messages.length > 0 ? res.messages[0] : 'Some error'
        dispatch(stopSubmit('login', { _error: message }))
    }
}
export const logout = () => async (dispatch) => {
    let res = await authAPI
        .logOut()
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch) => {
    let res = await securityAPI
        .getCaptchaUrl();
    const captcha = res.url;
    dispatch(getCaptchaAC(captcha));

}

export default authReducer;