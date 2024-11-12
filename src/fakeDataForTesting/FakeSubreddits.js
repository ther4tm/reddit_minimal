//fake data to map over and create navlinks

const resources = {
    kind: 'Listing',
    data: {
        after: 't5',
        dist: 25, //number of subreddits to display per page
        children: {
            0: {
                kind: 't5',
                data: {
                    title: 'Subreddit 01',
                    display_name_prefixed: 'r/Subreddit-01',
                    id: '01'
                }
            },
            1: {
                kind: 't5',
                data: {
                    title: 'Subreddit 02',
                    display_name_prefixed: 'r/Subreddit-02',
                    id: '02'
                }
            },
            2: {
                kind: 't5',
                data: {
                    title: 'Subreddit 03',
                    display_name_prefixed: 'r/Subreddit-03',
                    id: '03'
                }
            },
            3: {
                kind: 't5',
                data: {
                    title: 'Subreddit 04',
                    display_name_prefixed: 'r/Subreddit-04',
                    id: '04'
                }
            },
        }
    }
};

export default resources;