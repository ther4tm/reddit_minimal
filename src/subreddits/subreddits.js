import React from "react";
import { NavLink } from "react-router-dom";

//fake data for testing
import resources from "./FakeSubreddits.js";

export default function Subreddits() {
    return (
        <div>
            <ul>
                {resources.map(subreddit => (
                <li key={subreddit.id}>
                    <NavLink to={`/${subreddit.topic}`}>
                    {subreddit.topic}
                    </NavLink>
                </li>
                ))}
            </ul>
        </div>
    )
};