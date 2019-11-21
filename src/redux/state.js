import { rerenderEntireTree } from "../render";

let state ={
    profilePage: {
        posts: [
            {id: 1, message: 'Hey doggy!', value: '5'},
            {id: 2, message: "Saw you today with a stick in your mouth", value: '40'},
            {id: 3, message: 'What the hell have you been doing ?!', value: '40'}
        ],
        
    },
   dialogsPage: {
    messages: [
        {message: 'hi'},
        {message: 'So what the big fucking deal?!'},
        {message: 'What the fuck are you doing right here ?!'}
    ],
    dialogs: [
        { id: 1, name: 'Koti', imag: '../../redux/avatars/kot.jpg'},
        { id: 2, name: 'Sobaki', imag: '../../redux/avatars/dog.jpg' },
        { id: 3, name: 'Snoli', imag: '../../redux/avatars/elephant.jpg' },
        { id: 4, name: 'Medvedi', imag: '../../redux/avatars/bear.jpg' },
        { id: 5, name: 'Mouse', imag: '../../redux/avatars/mouse.jpg' },
        { id: 6, name: 'Boolshiti', imag: '../../redux/avatars/shit.jpg' }
    ]
   }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 4,
        message: postMessage,
        value: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state