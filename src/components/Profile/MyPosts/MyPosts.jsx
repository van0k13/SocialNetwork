import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/reducer_profile';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post avatars={p.avatars} message={p.message} likesValue={p.value} />);

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    };
    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    };
    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            addPost()
        }
    };

    return <div className={styles.stilization}>
        <h3>My posts</h3>
        <div>
            <textarea onKeyPress={onKeyPress} onChange={onPostChange}value={props.newPostText} />
        </div>
        <div>
            <button onClick={addPost}>Add Post</button>
        </div>
        <div className={styles.posts}>

            {postElements}
        </div>
    </div>
}

export default MyPosts;