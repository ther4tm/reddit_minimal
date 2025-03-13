import React from "react";
import style from './post.module.css';
import Comment from "../comment/comment";
import { useSelector } from "react-redux";
import { selectPost, isLoadingPostAndComments, failedToLoadPostAndComments, selectComments } from "./postSlice";
import { Text } from "./postElements/textElement";
import { Image } from "./postElements/imageElement";
import { Video } from "./postElements/videoElement";
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
                <>
                <h2>{post.title}</h2>
                <h3>{post.author}</h3>
                <GalleryFeed post={post}/>
                <Video post={post}/>
                <Image post={post}/>
                <Text post={post}/>
                <h4>Posted {calculatePostDate(date)}</h4>
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