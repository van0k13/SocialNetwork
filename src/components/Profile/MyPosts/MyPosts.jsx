import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesValue={p.value} />);

    let addTextArea = React.createRef();

    let addPost = () => {
        props.addPost();

    };

    let onPostChange = () => {
        let text = addTextArea.current.value;
        props.updateNewPostText(text)
    };

    return <div className={styles.stilization}>
        <h3>My posts</h3>
        <div>
            <textarea onChange={onPostChange}
                ref={addTextArea}
                value={props.newPostText} />
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