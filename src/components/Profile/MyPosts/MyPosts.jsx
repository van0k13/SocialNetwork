import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={"newPost"}
                    placeholder={'enter post'}
                />
            </div>
            <div>
                <button >Add Post</button>
            </div>
        </form>
    )
}
const MyPostsReduxForm = reduxForm({form: 'myPosts'})(AddNewPostForm )
const MyPosts = (props) => {
    const addPost = (formData) => {
        props.addPost(formData.newPost)
    }
    let postElements =
        props.posts.map(p => <Post key={p.id} avatars={p.avatars} message={p.message} likesValue={p.value}/>);


    return <div className={styles.stilization}>
        <h3>My posts</h3>
        <MyPostsReduxForm onSubmit={addPost}/>
        <div className={styles.posts}>
            {postElements}
        </div>
    </div>
}


export default MyPosts;