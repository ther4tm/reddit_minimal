export function Video({post}) {
    const url = post.media?.reddit_video?.fallback_url?.split('?')[0]; //? is optional chaining to prevent runtime errors if no media is present, it returns undefined if there is no information
    //the split method removes all the ? from the path and then puts path into an array, the [0] then selects the first item in the array which is the path without all the ?

    if (url) {
        return (
            <div>
                <video src={url} controls={true} type='videao/mp4'/>
            </div>
        )
    }
}