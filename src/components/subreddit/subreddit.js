import React from "react";
import style from './subreddit.module.css';
import Post from "../post/post";

//fake data for testing
import posts from "../../fakeDataForTesting/FakePosts";

export default function Subreddit() {
    return (
        <div className={style.subredditContainer}>
                {Object.keys(posts.data.children).map((e) => {
                return (
                <Post
                key={posts.data.children[e].data.id}
                link={posts.data.children[e].data.permalink}
                postTitle={posts.data.children[e].data.title}
                author={posts.data.children[e].data.author}
                media={posts.data.children[e].data.media_metadata[0].s.u}
                upVotes={posts.data.children[e].data.ups}
                downVotes={posts.data.children[e].data.downs}
                comments={posts.data.children[e].data.num_comments}
                />
                        );
                }
                    )
                }
        </div>
    )
};

//make a comments component