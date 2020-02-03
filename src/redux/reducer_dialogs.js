import kot from './avatars/kot.jpg';
import dog from './avatars/dog.png';
import bear from './avatars/bear.png';
import slon from './avatars/elephant.png';
import mouse from './avatars/mouse.png';
import shit from './avatars/shit.png'

const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
    messages: [
        { id: 1, message: 'hi' },
        { id: 2, message: 'So what the big fucking deal?!' },
        { id: 3, message: 'What the fuck are you doing right here ?!' }
    ],
    dialogs: [
        { id: 1, name: 'Koti', imag: kot },
        { id: 2, name: 'Sobaki', imag: dog },
        { id: 3, name: 'Snoli', imag: slon },
        { id: 4, name: 'Medvedi', imag: bear },
        { id: 5, name: 'Mouse', imag: mouse },
        { id: 6, name: 'Boolshiti', imag: shit }
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: action.newMessage}]
            };

        default: return state;
    }
}

export const addMessageActionCreator = (newMessage) => ({ type: ADD_MESSAGE, newMessage })


export default dialogsReducer;