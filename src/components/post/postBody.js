import { removeOuterDiv } from "../../Utilities/utilities";

export function PostBody({post}) {
    const text = post.selftext_html || null;
    if (text) {
        return <div dangerouslySetInnerHTML={{__html: removeOuterDiv(text)}} />
    }
};