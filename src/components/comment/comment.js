import React from "react";
import style from './comment.module.css';
import  { removeOuterDiv } from '../../Utilities/utilities.js';

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

    function setCommentBody(comment) {
        const text = comment.body_html || null;
        if (text) {
            return <div dangerouslySetInnerHTML={{__html: removeOuterDiv(comment.body_html)}} />
        }
    }

    return (
        <div className={style.commentContainer}>
            <div>
                <div className={style.commentHeader}>
                    <h3>Author: {comment.author}</h3>
                </div>
                <div className={style.commentMain}>
                    {setCommentBody(comment)}
                </div>
                <div className="replies">
                    {nestedComments(comment)}
                </div>
            </div>
        </div>
    )
};