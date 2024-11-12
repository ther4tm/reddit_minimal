import React from "react";
import style from './post.module.css';

export default function Post(props) {
    return (
        <div className={style.postContainer}>
            <p>{props.postTitle}</p>
            <p>{props.author}</p>
            <p>{props.media}</p>
            <p>{props.upVotes}</p>
            <p>{props.downVotes}</p>
            <p>{props.comments}</p>
        </div>
    )
};