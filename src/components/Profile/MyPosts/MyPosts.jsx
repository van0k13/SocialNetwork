import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
        <div className={styles.posts}>
            <Post message='Hey doggy!' value='5'/>
            <Post
             message="Saw you today with a stick in your mouth" value='40'
             />
            <Post />
        </div>
    </div>
}

export default MyPosts;