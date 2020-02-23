import profileReducer, { addPostActionCreator, deletePostAC } from "./reducer_profile";

let state = {
    posts: [
        { id: 1, message: 'Hey doggy!', value: '5' },
        { id: 2, message: "Saw you today with a stick in your mouth", value: '40' },
        { id: 3, message: 'What the hell have you been doing ?!', value: '40' }
    ]
};
it('post length should increment', () => {
    let action =  addPostActionCreator('new post');
    let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(4);
  });
it('post have proper message', () => {
    let action =  addPostActionCreator('new post');
    let newState = profileReducer(state, action);
   expect(newState.posts[3].message).toBe('new post');
  });
it('post deleting', () => {
    let action =  deletePostAC(1);
    let newState = profileReducer(state, action);
   expect(newState.posts.length).toBe(2);
  });

