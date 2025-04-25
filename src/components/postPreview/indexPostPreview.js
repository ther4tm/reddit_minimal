import React from "react";
import style from './postPreview.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostAndComments } from "../post/postSlice";
import { GalleryFeed } from "../post/postElements/galleryFeed";
import { Video } from "../post/postElements/videoElement";
import { Image } from "../post/postElements/imageElement";
import { Text } from "../post/postElements/textElement";
import { ExternalLink } from "../post/postElements/externalLinkElement";

export default function IndexPostPreview({ post }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onClickPostLink = (e) => {
        dispatch(loadPostAndComments(e))
    }

    const goToPost = (e) => {
        navigate(`${e.id}`)
        dispatch(loadPostAndComments(e.permalink))
    }

    return (
        <div className={style.postPreviewContainer}>
            <div className={style.postPreviewHeader}>
            <Link to={`${post.id}`}
                onClick={() => onClickPostLink(post.permalink)}
                >
                    <h2>{post.title}</h2>
                </Link>
            </div>
            <div className={style.postPreviewMenuBar}>
                <p>&#129153; {post.ups}</p>
                <p>&#129155; {post.downs}</p>
                <p>&#128490; {post.num_comments}</p>
            </div>
            <div className={style.postPreviewMain}>
                <ExternalLink post={post}/>
                <GalleryFeed post={post}/>
                <Video post={post}/>
                <Image post={post}/>
                <Text post={post}/>
            </div>
            <div className={style.postPreviewFooter}>
                <button onClick={() => goToPost(post)}>GO TO POST</button>
            </div>
        </div>
    )
};