import React from "react";
import style from './post.module.css';
import Comment from "../comment/comment";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPostAndComments, failedToLoadPostAndComments, selectComments } from "./postSlice";

export default function Post() {
    const post = useSelector(selectPost);
    const isLoading = useSelector(isLoadingPostAndComments);
    const hasError = useSelector(failedToLoadPostAndComments);
    const comments = useSelector(selectComments);

    /*const utcDate = new Date(Date.UTC(post.created_utc));
    const date = utcDate;*/

    const displayPostAndComments = () => {
        if (isLoading) {
            return (
                        <p>Loading...</p>
            )
        } else if (hasError) {
            return (
                        <p>Error</p>
            )
        } else if (comments.length > 0) {
            return (
                <>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <h4>Date posted: {post.created_utc}</h4>
                <p>PHOTOS AND MEDIA HERE</p>
                <p>{post.selftext}</p>
                <p>UpVotes: {post.ups}</p>
                <p>DownVotes: {post.downs}</p>
                <p>Comments: {post.num_comments}</p>
                    <div>
                    {comments.map((comment, index) => (
                    <Comment
                    key={index}
                    comment={comment}
                    />
                            )
                        )
                    }
                    </div>
                </>
            )
        }
    }

    return (
        <div className={style.postContainer}>
            {displayPostAndComments()}
        </div>
    )
};