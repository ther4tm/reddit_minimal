import { ImageGallery } from "./galleryElement";

export function GalleryFeed({post}) {
    if (post.is_gallery) {
        const keys = Object.keys(post.media_metadata); //returns an array of indexes
        const images = post.media_metadata; //stores all the image info
        
        return <ImageGallery keys={keys} images={images}/>
    }
};

//need this extra step to store the information and push it down the hierarchy other wise it comes back as undefined