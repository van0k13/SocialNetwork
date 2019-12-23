import { createStore, combineReducers } from "redux";
import profileReducer from './reducer_profile';
import dialogsReducer from './reducer_dialogs';
import usersReducer from "./reducer_users";


let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

let store = createStore(reducersPack);

window.store = store

export default store