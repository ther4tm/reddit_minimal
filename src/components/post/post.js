import React from "react";
import style from './post.module.css';
import Comment from "../comment/comment";
import { Link } from "react-router-dom";

//fake data for testing
import comments from "../../fakeDataForTesting/FakeComments";

export default function Post(props) {
    return (
        <div className={style.postContainer}>
            <h2>{props.postTitle}</h2>
            <h3>{props.author}</h3>
            <p>{props.media}</p>
            <p>UpVotes: {props.upVotes}</p>
            <p>DownVotes: {props.downVotes}</p>
            <p>Comments: {props.comments}</p>
            <Link to={props.link}>topic</Link>
            {Object.keys(comments[1].data.children).map((e) => {
                return (
                <Comment
                key={comments[1].data.children[e].data.id}
                author={comments[1].data.children[e].data.author}
                body={comments[1].data.children[e].data.body}
                commentReplies={comments[1].data.children[e].data}
                />
                        );
                    }
                )
            }
        </div>
    )
};

                
