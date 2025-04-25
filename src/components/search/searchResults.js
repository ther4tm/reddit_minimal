import React from "react";
import style from './searchResults.module.css';
import { useSelector } from "react-redux";
import { selectSearchResults, isLoadingSearchResults, failedToLoadSearchResults } from "./searchSlice";
import SubredditPreview from "./subredditPreview";

export default function SearchResults() {
    const searchResults = useSelector(selectSearchResults);
    const isLoading = useSelector(isLoadingSearchResults);
    const hasError = useSelector(failedToLoadSearchResults);

    const displaySearchResultsPreviews = () => {
        if (isLoading) {
            return (
                        <p>Loading...</p>
            )
        } else if (hasError) {
            return (
                        <p>Error</p>
            )
        } else if (searchResults.length > 0) {
            return (
                <>
                {searchResults.map((subreddit, index) => (
                <SubredditPreview
                key={index}
                subreddit={subreddit}
                />
                        )
                    )
                }
                </>
            )
        }
    }

    return (
        <div className={style.searchResultsContainer}>
            <h1>Search Results</h1>
            {displaySearchResultsPreviews()}
        </div>
    )
};