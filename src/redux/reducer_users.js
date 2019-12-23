const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';



let initialState = {
    users: [
        // { id: 1, photoUrl: '#', followed: true, fullname: 'Vanok', status: 'I like icecreame', location: { city: 'Kyiv', country: 'Ukraine' } },
        // { id: 2, photoUrl: '#',followed: false, fullname: 'Rusik', status: 'Lets friends!!!', location: { city: 'Los-Santos', country: 'USA' } },
        // { id: 3, photoUrl: '#',followed: true, fullname: 'Olga', status: 'Love my Boy', location: { city: 'Vinnitsa', country: 'Ukraine' } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })

            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })

            }

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ( { type: FOLLOW, userId } );
export const unFollowAC = (userId) => ( { type: UNFOLLOW, userId } );
export const setUsersAC = (users) => ( { type: SET_USERS, users } );




export default usersReducer;