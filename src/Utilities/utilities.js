import DOMPurify from 'dompurify';

//Removes outer div and cleans any malicious code that might have been inserted
export function removeOuterDiv(content) {
    let e = document.createElement('div'); //creates new outer div
    e.innerHTML = content; //sets content to info pulled from reddit
    const grossValue = e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue; //targets the extra divs
    const netValue = (' ' + grossValue).slice(1); //creates a shallow copy of the original info with all the extra html removed

    return DOMPurify.sanitize(netValue); //uses DOMPurify to return a sanitized code block
}

export function calculatePostDate(time) {
    const currentTime = Date.now();
    const createdAt = time * 1000;
    const timeDiff = currentTime - createdAt;
    const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4 * 12));
    const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7 * 4));
    const weeks = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeDiff / (1000 * 60 * 60));
    const minutes = Math.floor(timeDiff / (1000 * 60));
    
    if(years) {
        return `${years} ${years > 1 ? 'years' : 'year'} ago`
    }
    if(months) {
        return `${months} ${months > 1 ? 'months' : 'month'} ago`
    }
    if(weeks) {
        return `${weeks} ${weeks > 1 ? 'weeks' : 'week'} ago`
    }
    if(days) {
        return `${days} ${days > 1 ? 'days' : 'day'} ago`
    }
    if(hours) {
        return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`
    }
    if(minutes) {
        return `${minutes} ${minutes > 1 ? 'minutes' : 'minute'} ago`
    }
}