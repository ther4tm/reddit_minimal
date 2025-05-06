import { useState } from "react";
import style from './galleryElement.module.css';

export function ImageGallery({keys, images}) {
    const imageURLs = keys.map(key => images[key].s?.u?.split('?')[0].replace('preview', 'i'));
    const [currentImage, setCurrentImage] = useState(0);

    const previousImg = () => {
        if (currentImage === 0) {
            return;
        } else if (currentImage > 0) {
            return setCurrentImage(currentImage - 1);
        }
    }

    const nextImg = () => {
        if (currentImage === imageURLs.length - 1) {
            return;
        } else if (currentImage >= 0) {
            return setCurrentImage(currentImage + 1)
        }
    }

    return (
        <div className={style.galleryContainer}>
            <button className={style.leftArrow} onClick={() => previousImg()}>&lt;</button>
            <button className={style.rightArrow} onClick={() => nextImg()}>&gt;</button>
            <img src={imageURLs[currentImage]} alt={imageURLs} />
        </div>
    )
};