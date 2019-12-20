import kot from './avatars/kot.jpg'
import dog from './avatars/dog.png'
import bear from './avatars/bear.png'
import slon from './avatars/elephant.png'
import mouse from './avatars/mouse.png'
import shit from './avatars/shit.png'
import profileReducer from './reducer_profile'
import dialogsReducer from './reducer_dialogs'


let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey doggy!', value: '5' },
                { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
                { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
            ],
            newPostText: ''

        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'So what the big fucking deal?!' },
                { id: 3, message: 'What the fuck are you doing right here ?!' }
            ],
            dialogs: [
                { id: 1, name: 'Koti', image: kot},
                { id: 2, name: 'Sobaki', image: dog},
                { id: 3, name: 'Snoli', image: bear},
                { id: 4, name: 'Medvedi', image: slon},
                { id: 5, name: 'Mouse', image: mouse},
                { id: 6, name: 'Boolshiti', image: shit}
            ],
            newMessageText: ''
        }
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
}



export default store