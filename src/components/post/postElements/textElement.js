import { removeOuterDiv } from "../../../Utilities/utilities";
import style from './textElement.module.css';

export function Text({post}) {
    const text = post.selftext_html || null;
    if (text) {
        return <div dangerouslySetInnerHTML={{__html: removeOuterDiv(text)}} className={style.textElementContainer} />
    }
};