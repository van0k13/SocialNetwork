import { createStore, combineReducers } from "redux";
import profileReducer from './reducer_profile';
import dialogsReducer from './reducer_dialogs';
import navbarReducer from "./reducer_navbar";


let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbarPage: navbarReducer
});

let store = createStore(reducersPack);

window.store = store

export default store