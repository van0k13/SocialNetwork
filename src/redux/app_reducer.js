import {setAuth} from './auth_reducer';

export const INITIALIZED_SUCCESSED = 'appReducer/INITIALIZED_SUCCESSED';

let initialState = {
    initialized: false,
    
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESSED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESSED });

export const initializeApp = () => async (dispatch) => {
    await dispatch(setAuth());
    dispatch(setInitializedSuccess())
}

export default appReducer;