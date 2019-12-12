import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
let newPostElement = React.createRef();

    let postElements =
     props.posts.map(p => <Post avatars={p.avatars} message={p.message} likesValue={p.value} />);

    let addPost = () => {
        props.addPost();
        newPostElement.current.value = ''
    };
    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text);
    };
    

    return <div className={styles.stilization}>
        <h3>My posts</h3>
        <div>
            <textarea onKeyPress={props.onKeyPress} ref={newPostElement} onChange={onPostChange}value={props.newPostText} />
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