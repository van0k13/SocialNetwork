import kot from './avatars/kot.jpg'
import dog from './avatars/dog.png'
import bear from './avatars/bear.png'
import slon from './avatars/elephant.png'
import mouse from './avatars/mouse.png'
import shit from './avatars/shit.png'

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
                { message: 'hi' },
                { message: 'So what the big fucking deal?!' },
                { message: 'What the fuck are you doing right here ?!' }
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
        if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'ADD_POST') {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                value: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store