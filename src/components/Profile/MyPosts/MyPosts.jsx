import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post avatars={p.avatars} message={p.message} likesValue={p.value} />);

    let addTextArea = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD_POST'})

    };

    let onPostChange = () => {
        let text = addTextArea.current.value;
        props.dispatch({type: 'UPDATE_NEW_POST_TEXT', newText : text})
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