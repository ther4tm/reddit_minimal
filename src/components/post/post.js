import React from "react";
import style from './post.module.css';
import Comment from "../comment/comment";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPostAndComments, failedToLoadPostAndComments, selectComments } from "./postSlice";
import { Text } from "./postElements/textElement";
import { Image } from "./postElements/imageElement";
import { Video } from "./postElements/videoElement";
import { ExternalLink } from "./postElements/externalLinkElement"; 
import { GalleryFeed } from "./postElements/galleryFeed";
import { calculatePostDate } from "../../Utilities/utilities";

export default function Post() {
    const post = useSelector(selectPost);
    const isLoading = useSelector(isLoadingPostAndComments);
    const hasError = useSelector(failedToLoadPostAndComments);
    const comments = useSelector(selectComments);
    const date = post.created_utc;

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
                <div className={style.postContainer}>
                    <div className={style.postHeader}>
                        <h2>{post.title}</h2>
                    </div>
                    <div className={style.postMenuBar}>
                        <p>&#129153; {post.ups}</p>
                        <p>&#129155; {post.downs}</p>
                        <p>&#128490; {post.num_comments}</p>
                    </div>
                    <div className={style.postMain}>
                        <h3>Posted by {post.author} {calculatePostDate(date)}</h3>
                        <ExternalLink post={post}/>
                        <GalleryFeed post={post}/>
                        <Video post={post}/>
                        <Image post={post}/>
                        <Text post={post}/>
                    </div>
                    <div className={style.postCommentsContainer}>
                        <div className={style.postComments}>
                            {comments.map((comment, index) => (
                            <Comment
                            key={index}
                            comment={comment}
                            />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className={style.postOverallContainer}>
            {displayPostAndComments()}
        </div>
    )
};