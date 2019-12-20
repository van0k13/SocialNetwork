import kot from './avatars/kot.jpg'
import dog from './avatars/dog.png'
import bear from './avatars/bear.png'
import slon from './avatars/elephant.png'
import mouse from './avatars/mouse.png'
import shit from './avatars/shit.png'

let initialState = {
    dialogs: [
        { id: 1, name: 'Koti', image: kot},
        { id: 2, name: 'Sobaki', image: dog},
        { id: 3, name: 'Snoli', image: bear},
        { id: 4, name: 'Medvedi', image: slon},
        { id: 5, name: 'Mouse', image: mouse},
        { id: 6, name: 'Boolshiti', image: shit}
    ]
};

const navbarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'value':
            return state
    
        default:
           return state;
    }
}



export default navbarReducer;