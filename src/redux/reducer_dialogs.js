import kot from './avatars/kot.jpg';
import dog from './avatars/dog.png';
import bear from './avatars/bear.png';
import slon from './avatars/elephant.png';
import mouse from './avatars/mouse.png';
import shit from './avatars/shit.png'
import { dialogsAPI } from '../api/api';

const ADD_MESSAGE = 'reducer_dialogs/ADD_MESSAGE'
const GET_DIALOGS = 'reducer_dialogs/GET_DIALOGS'

let initialState = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'So what the big deal?!' },
        { id: 3, message: 'What are you doing right here ?!' }
    ],
    dialogs: [
        { id: 1, name: 'Koti', imag: kot },
        { id: 2, name: 'Sobaki', imag: dog },
        { id: 3, name: 'Snoli', imag: slon },
        { id: 4, name: 'Medvedi', imag: bear },
        { id: 5, name: 'Mouse', imag: mouse },
        { id: 6, name: 'Boolshiti', imag: shit }
    ],
    selectedDialogId: null
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { id: 7, message: action.newMessage }]
            };

        default: return state;
    }
}

export const getDialogsTC = (dispatch) => () => {
    dialogsAPI.getDialogs().then(dialogs => {
        dispatch(getDialogsAC(dialogs))
    })
}
export const sendMessageTC = (dispatch) => (newMessage) => {
    dialogsAPI.sendMessage();
    dispatch(addMessageAC(newMessage))
}

const getDialogsAC = (dialogs) => ({ type: GET_DIALOGS, payload: { dialogs } })
const addMessageAC = (newMessage) => ({ type: ADD_MESSAGE, newMessage })


export default dialogsReducer;