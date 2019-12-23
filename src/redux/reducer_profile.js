const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
    posts: [
        { id: 1, message: 'Hey doggy!', value: '5' },
        { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
        { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let actualMessage = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 4, message: actualMessage}]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default: return state;
    }
}

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })
export const addPostActionCreator = () => ({ type: ADD_POST })

export default profileReducer;