/*
async function searchArtistTracks(search) {
    const response = await fetch('https://www.reddit.com/r/popular.json');
    if (response.ok) {
        const jsonResponse = await response.json();
        console.log(JSON.stringify(jsonResponse))
    }
    
    };
*/

/*
async function testReddit() {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const jsonResponse = await response.json(); //converts the response to JSON
    return jsonResponse;
};
*/

//testReddit().then((response) => {console.log(response)});
//console.log(JSON.stringify(jsonResponse))
//console.log(testReddit());
//testReddit();

/*
async function searchArtistTracks(search) {
    const response = await fetch(`https://api.spotify.com/v1/search?q=artist%3A%22${search}&type=track&limit=15`, { //Limited to 15 tracks at the minute
        method: 'GET',
        headers: { 'Authorization': 'Bearer ' + currentToken.access_token },
    });

    return await response.json(); //converts the response to JSON
    };
*/

const apiRoot = 'https://www.reddit.com/';
const subreddit = 'r/magicTCG';
const urlJson = apiRoot + subreddit + '.json';



/*
This suffix should be added to target each json response as this is the general reddit pattern
.data.children.map(target => target.data) <- children is an array that can be mapped over to provide the data to populate the components
*/

/*
The permalink of each post provides the endpoint url for the comments on that post,
the permalink of each comment provides the endpoint url for the replies to that comment
*/

//fake data to map over and create posts

const posts = {
    kind: 'Listing',
    data: {
        after: 't3',
        dist: 27, //number of posts to display per page
        children: {
            0: {
                kind: 't3',
                data: {
                    title: 'I took my son to the national museum.', //post title
                    selftext: 'I thought you\'d like to see them too', //post text
                    permalink: 'r/Subreddit-01/I_took_my_son', //links to the post but can also be used to get the comments on the post
                    id: '01',
                    author: 'chandras_biggest_fan', //author username
                    media_metadata: {
                        0: {
                            s: {
                                u: 'img endpoint' //This is the original size of the image
                            }
                        }, //There are as many of these as there are images present within the post.
                        1: {},
                    },
                    ups: 45,
                    downs: 0,
                    num_comments: 8
                }
            },
            1: {
                kind: 't3',
                data: {
                    title: 'Mark Rosewater said this...', //post title
                    selftext: 'At MagiCon Mark Rosewater came out with this statement', //post text
                    permalink: 'r/Subreddit-01/Mark_rosewater', //links to the post but can also be used to get the comments on the post
                    id: '02',
                    author: 'magic_player_69', //author username
                    media_metadata: {
                        0: {
                            s: {
                                u: 'img endpoint' //This is the original size of the image
                            }
                        }, //There are as many of these as there are images present within the post.
                        1: {},
                    },
                    ups: 21,
                    downs: 3,
                    num_comments: 38
                }
            },
            2: {
                kind: 't3',
                data: {
                    title: 'Foundations', //post title
                    selftext: 'Some of the new cards being released in Foundations', //post text
                    permalink: 'r/Subreddit-01/foundations', //links to the post but can also be used to get the comments on the post
                    id: '03',
                    author: 'Jace_is_the_place', //author username
                    media_metadata: {
                        0: {
                            s: {
                                u: 'img endpoint' //This is the original size of the image
                            }
                        }, //There are as many of these as there are images present within the post.
                        1: {},
                    },
                    ups: 2345,
                    downs: 0,
                    num_comments: 17
                }
            },
            3: {
                kind: 't3',
                data: {
                    title: 'Arena Questions', //post title
                    selftext: 'Post your daily questions about MTG Arena here.', //post text
                    permalink: 'r/Subreddit-01/arena_questions', //links to the post but can also be used to get the comments on the post
                    id: '04',
                    author: 'MTG_Arena_mod', //author username
                    media_metadata: {
                        0: {
                            s: {
                                u: 'img endpoint' //This is the original size of the image
                            }
                        }, //There are as many of these as there are images present within the post.
                        1: {},
                    },
                    ups: 4,
                    downs: 0,
                    num_comments: 3
                }
            },
        }
    }
};

export default posts;