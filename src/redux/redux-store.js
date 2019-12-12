import { createStore, combineReducers } from "redux";
import profileReducer from './reducer_profile'
import dialogsReducer from './reducer_dialogs'


let reducersPack = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

let store = createStore(reducersPack);

export default store