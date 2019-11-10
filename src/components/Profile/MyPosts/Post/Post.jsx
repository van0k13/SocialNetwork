import React from 'react';
import styles from './Post.module.css';


const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://pbs.twimg.com/profile_images/671465795365560320/TiQW_VCt_400x400.jpg' />
            {props.message}
            <div>
            {props.likesValue}likes
            </div>
        </div>
 );

}

export default Post;