import React, { useEffect } from "react";
import style from './post.module.css';
/*import Comment from "../comment/comment";*/
import { useDispatch, useSelector } from "react-redux";
import { selectPost, isLoadingPost, loadPostAndComments } from "./postSlice";

export default function Post() {
    const dispatch = useDispatch();
    const post = useSelector(selectPost);
    const isLoading = useSelector(isLoadingPost);

    if (isLoading) {
        return (
            <div className={style.subredditContainer}>
                <h1>Loading...</h1>
            </div>
        )
    }

    return (
        <div className={style.postContainer}>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <p>PHOTOS AND MEDIA HERE</p>
            <p>UpVotes: {post.ups}</p>
            <p>DownVotes: {post.downs}</p>
            <p>Comments: </p>
            {/*Object.keys(comments[1].data.children).map((e) => {
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
            */}
        </div>
    )
};

/*
export default function Subreddit() {
    const dispatch = useDispatch();
    const subredditPosts = useSelector(selectSubredditPosts);
    const isLoading = useSelector(isLoadingSubredditPosts);
    const hasError = useSelector(failedToLoadSubredditPosts);
    const selectedSubreddit = useSelector(getSelectedSubreddit);

    useEffect(() => {
        dispatch(loadSubreddit(selectedSubreddit));
    }, [selectedSubreddit], dispatch);
 
    const displaySubredditPostPreviews = () => {
        if (isLoading) {
            return (
                        <p>Loading...</p>
            )
        } else if (hasError) {
            return (
                        <p>Error</p>
            )
        } else if (subredditPosts.length > 0) {
            return (
                <>
                <h1>{selectedSubreddit}</h1>
                {subredditPosts.map((post, index) => (
                <PostPreview
                key={subredditPosts[index].id}
                link={subredditPosts[index].permalink}
                postTitle={subredditPosts[index].title}
                author={subredditPosts[index].author}
                upVotes={subredditPosts[index].ups}
                downVotes={subredditPosts[index].downs}
                comments={subredditPosts[index].num_comments}
                subreddit={subredditPosts[index].subreddit_name_prefixed}
                />
                        )
                    )
                }
                </>
            )
        }
    }

    return (
        <div className={style.subredditContainer}>
            {displaySubredditPostPreviews()}
        </div>
    )
};
*/