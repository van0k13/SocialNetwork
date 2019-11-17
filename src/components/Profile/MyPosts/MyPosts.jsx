import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map ( p => <Post message={p.message} likesValue={p.value} />);

    return <div className={styles.stilization}>
        <h3>My posts</h3>
        <div>
            <textarea></textarea>
        </div>
        <div>
            <button>Add Post</button>
        </div>
        <div className={styles.posts}>
            
           {postElements}
        </div>
    </div>
}

export default MyPosts;