import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from './reducer_profile';
import dialogsReducer from './reducer_dialogs';
import usersReducer from "./reducer_users";
import authReducer from "./auth_reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app_reducer";


let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

let store = createStore(reducersPack, applyMiddleware(thunkMiddleware));

window.store = store

export default store