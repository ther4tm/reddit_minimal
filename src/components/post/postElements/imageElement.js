import style from './imageElement.module.css';

export function Image({post}) {
    const url = post.url;

    function checkURLIsImg(url) {
        if(typeof url !== 'string') return false;
        return(url.match(/^http[^]*.(jpg|jpeg|svg|webp|gif|png|tiff|bmp)(\?(.*))?$/gmi) != null); //regex to check if url is an image and supports query params after file extensions
    }

    if (checkURLIsImg(url)) {
        return (
            <div className={style.imageContainer}>
                <img src={url} alt={url}/>
            </div>
        )
    }
}