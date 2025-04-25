import { ExternalLink } from "./externalLinkElement";

export function ExternalLinkFeed({post}) {
    if (!post.url || post.domain.includes('self')) {
        return;
    }

    const media = post.media.oembed;
    const url = post.url;

    return (
        <ExternalLink url={url} media={media} />
    )

}