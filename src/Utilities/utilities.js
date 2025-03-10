import DOMPurify from 'dompurify';

//Removes outer div and cleans any malicious code that might have been inserted
export function removeOuterDiv(content) {
    let e = document.createElement('div'); //creates new outer div
    e.innerHTML = content; //sets content to info pulled from reddit
    const grossValue = e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue; //targets the extra divs
    const netValue = (' ' + grossValue).slice(1); //creates a shallow copy of the original info with all the extra html removed

    return DOMPurify.sanitize(netValue); //uses DOMPurify to return a sanitized up code block
}