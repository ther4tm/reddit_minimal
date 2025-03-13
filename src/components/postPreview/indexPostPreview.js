import React from "react";
import style from './postPreview.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostAndComments } from "../post/postSlice";
import { GalleryFeed } from "../post/postElements/galleryFeed";
import { Video } from "../post/postElements/videoElement";
import { Image } from "../post/postElements/imageElement";
import { Text } from "../post/postElements/textElement";

export default function IndexPostPreview({ post }) {
    const dispatch = useDispatch();

    const onClickPostLink = (e) => {
        dispatch(loadPostAndComments(e))
    }

    return (
        <div className={style.postContainer}>
            <Link to={`${post.subreddit_name_prefixed}/${post.id}`}
            onClick={() => onClickPostLink(post.permalink)}
            >
                <h2>{post.title}</h2>
            </Link>
            <h3>{post.author}</h3>
            <GalleryFeed post={post}/>
            <Video post={post}/>
            <Image post={post}/>
            <Text post={post}/>
            <p>UpVotes: {post.ups}</p>
            <p>DownVotes: {post.downs}</p>
            <p>Comments: {post.num_comments}</p>
        </div>
    )
};