import kot from './avatars/kot.jpg'
import dog from './avatars/dog.png'
import bear from './avatars/bear.png'
import slon from './avatars/elephant.png'
import mouse from './avatars/mouse.png'
import shit from './avatars/shit.png'

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'

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
                { id: 1, name: 'Koti', imag: kot },
                { id: 2, name: 'Sobaki', imag: dog },
                { id: 3, name: 'Snoli', imag: slon },
                { id: 4, name: 'Medvedi', imag: bear },
                { id: 5, name: 'Mouse', imag: mouse },
                { id: 6, name: 'Boolshiti', imag: shit }
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

    // addMessage() {
    //     let newMessage = {
    //         message: this._state.dialogsPage.newMessageText
    //     };
    //     this._state.dialogsPage.messages.push(newMessage);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addPost() {
    //     let newPost = {
    //         id: 4,
    //         message: this._state.profilePage.newPostText,
    //         value: 0
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let actualMessage = this._state.dialogsPage.newMessageText
            let newMessage = {
                id: 4,
                message: actualMessage,
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_POST) {
            let actualMessage = this._state.profilePage.newPostText
            let newPost = {
                id: 4,
                message: actualMessage,
                value: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store