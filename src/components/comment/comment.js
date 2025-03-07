import React from "react";
import style from './comment.module.css';

export default function Comment({comment}) {

    function nestedComments(comment) {
        if (!comment.replies) {
            return;
        };
        
        //Because the below path can potentially be undefined if a post has no replies, it needs to be within the scope of the function so that it doesnt break the code.
        const replies = comment.replies.data.children;

        //This function creates nested instances of the comment component to render replies on each comment
        const replyRenderer = replies.map((reply, index) => {
            if (index >= replies.length - 1) {
                return null;
            }
            return (
                <div className="replies">
                    <Comment
                    key={index}
                    comment={reply.data}
                    />
                </div>
            )
        })

        return replyRenderer;
    }

    return (
        <div className={style.commentContainer}>
            <p>Author: {comment.author}</p>
            <p>Comment: {comment.body}</p>
            <p>Replies: </p>
            <div className="replies">
                {nestedComments(comment)}

            </div>
        </div>
    )
};