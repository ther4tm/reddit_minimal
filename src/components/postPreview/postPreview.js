import React from "react";
import style from './postPreview.module.css';
import { Link } from "react-router-dom";

export default function PostPreview(props) {
    return (
        <div className={style.postContainer}>
            <Link to={props.link}><h2>{props.postTitle}</h2></Link>
            <h3>{props.author}</h3>
            <p>{props.media}</p>
            <p>UpVotes: {props.upVotes}</p>
            <p>DownVotes: {props.downVotes}</p>
            <p>Comments: {props.comments}</p>
        </div>
    )
};