import React from "react";
import style from './postPreview.module.css';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadPostAndComments } from "../post/postSlice";

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
            <p>UpVotes: {post.ups}</p>
            <p>DownVotes: {post.downs}</p>
            <p>Comments: {post.num_comments}</p>
        </div>
    )
};

/*
                <PostPreview
                key={subredditPosts[index].id}
                link={subredditPosts[index].permalink}
                displayName={subredditPosts[index].display_name_prefixed}
                postTitle={subredditPosts[index].title}
                author={subredditPosts[index].author}
                upVotes={subredditPosts[index].ups}
                downVotes={subredditPosts[index].downs}
                comments={subredditPosts[index].num_comments}
                subreddit={subredditPosts[index].subreddit_name_prefixed}
                />*/