import React from 'react';
import styles from './Post.module.css';


const Post = () => {
    return (
        <div className={styles.item}>
            <img src='https://pbs.twimg.com/profile_images/671465795365560320/TiQW_VCt_400x400.jpg' />
            post 1
            <div>
            <span>like</span>
            </div>
        </div>
 );

}

export default Post;