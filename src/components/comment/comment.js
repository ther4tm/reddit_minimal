import React from "react";
import style from './comment.module.css';

export default function Comment(props) {
    
    /*
    function nestedComments(props) {
        if (!props.commentReplies) {
            return;
        };

        const replies = props.commentReplies.replies.data.children;

        //This function creates nested instances of the comment component to render replies on each comment
        const replyRenderer = Object.keys(replies).map((replyData, index) => {
            if (index >= replies.length - 1) {
                return null;
            }
            return (
                <div className="replies">
                    <Comment
                    key={replyData.data.id}
                    body={replyData.data.body}
                    author={replyData.data.author}
                    />
                </div>
            )
        });

        return replyRenderer;
    }
    */

    return (
        <div className={style.commentContainer}>
            <p>Author: {props.author}</p>
            <p>Comment: {props.body}</p>
            <p>Replies: </p>
            <div className="replies">
                {/*nestedComments(props)*/}

            </div>
        </div>
    )
};

/*
Path to access the replies of a comment from the posts permalink json

[1].data.children[e].data.replies.data.children
this is the path to get to the point where you can map over the replies to the comment
then to get the reply its;
[e].data.body
to get replies to this reply its [e].data.replies.data.children

*/