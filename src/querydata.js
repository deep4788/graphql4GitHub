"use strict";

var BIO = `query {
    viewer {
        login
        bio
    }
}`;

var EMAIL = `query {
    viewer {
        login
        email
    }
}`;

var LOGIN = `query {
    viewer {
        login
    }
}`;

var REPOS = `query {
    viewer {
        login
        repositories(first: 40, orderBy: {field: PUSHED_AT, direction: DESC}) {
            edges {
                node {
                    name
                    createdAt
                    url
                }
                cursor
            }
            totalCount
            totalDiskUsage
        }
    }
}`;

module.exports = {
    BIO,
    EMAIL,
    LOGIN,
    REPOS
};
