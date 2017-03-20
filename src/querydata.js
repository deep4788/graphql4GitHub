"use strict";

let BIO = `query {
    viewer {
        login
        bio
    }
}`;

let EMAIL = `query {
    viewer {
        login
        email
    }
}`;

let FOLLOWERS = `query {
    viewer {
        login
        followers(first: 10) {
            edges {
                node {
                    name
                }
            }
        }
    }
}`;

let LOGIN = `query {
    viewer {
        login
    }
}`;

let ORGS = `query {
    viewer {
        login
        organizations(first: 10) {
            edges {
                node {
                    name
                }
            }
        }
    }
}`;

let REPOS = `query {
    viewer {
        login
        repositories(first: 40, orderBy: {field: PUSHED_AT, direction: DESC}) {
            edges {
                node {
                    name
                    createdAt
                    url
                }
            }
            totalCount
            totalDiskUsage
        }
    }
}`;

module.exports = {
    BIO,
    EMAIL,
    FOLLOWERS,
    LOGIN,
    ORGS,
    REPOS
};
