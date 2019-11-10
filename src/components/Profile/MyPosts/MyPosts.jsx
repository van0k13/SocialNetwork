import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {

    let posts = [
        {message: 'Hey doggy!', value: '5'},
        {message: "Saw you today with a stick in your mouth", value: '40'},
        {message: 'What the hell have you been doing ?!', value: '40'}
    ]

    let postElements = posts.map ( p => <Post message={p.message} likesValue={p.value} />);

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