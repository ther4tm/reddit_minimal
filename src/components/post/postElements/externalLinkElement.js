import style from './externalLink.module.css';

export function ExternalLink({post}) {
    if (!post.url || post.domain.includes('self') || post.domain.includes('redd')) {
        return;
    }
    
    const imgThumb = post.thumbnail;

    function checkIsImg(e) {
        if(typeof e !== 'string') return false;
        return (e.match(/^http[^]*.(jpg|jpeg|svg|webp|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null); //regex to check if url is an image and supports query params after file extensions
    }

    if (!post.media && checkIsImg(imgThumb)) {
        return (
            <div className={style.externalLinkContainer}>
                <a href={post.url}><img src={imgThumb} alt={post.url}/></a>
                <p>{post.url}</p>
            </div>
        )
    } else if (!post.media) {
        return (
            <div className={style.externalLinkContainer}>
                <a href={post.url}>{post.url}</a>
            </div>
        )
    } else {
        const imgUrl = post.media.oembed.thumbnail_url;
        const imgTitle = post.media.oembed.title;

        return (
            <div className={style.externalLinkContainer}>
                <a href={post.url}><img src={imgUrl}  alt={imgTitle}/></a>
                <p>{post.url}</p>
            </div>
        )
    }
}