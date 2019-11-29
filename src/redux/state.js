import kot from './avatars/kot.jpg'
import dog from './avatars/dog.png'
import bear from './avatars/bear.png'
import slon from './avatars/elephant.png'
import mouse from './avatars/mouse.png'
import shit from './avatars/shit.png'

let rerenderEntireTree = () => {


}

let state = {
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
}

export const addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    console.log(newText)
    rerenderEntireTree(state);
}

export const addPost = () => {
    let newPost = {
        id: 4,
        message: state.profilePage.newPostText,
        value: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}
export default state