import { setAuth } from './auth_reducer';

const INITIALIZED_SUCCESSED = 'appReducer/INITIALIZED_SUCCESSED';



let initialState = {
    initialized: false
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

export const setInitializedSuccess = () => ({ type: INITIALIZED_SUCCESSED});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(setAuth());

  Promise.all([promise])
  .then(()=> {
    dispatch(setInitializedSuccess())
  })
}
export default appReducer;