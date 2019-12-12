import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer_profile';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    };
    let onPostChange = (text) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))
    };
    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            addPost()
        }
    };

    return (
        <MyPosts posts={state.profilePage.posts}
        onKeyPress={onKeyPress} 
        updateNewPostText={onPostChange}
        addPost={addPost} />
    )
}

export default MyPostsContainer;