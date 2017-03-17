#!/usr/bin/env node
"use strict";

/**
* @brief This class handles query object
*/
class Query {
    constructor() {
        this._queryData = {};
    }

    createQuery() {
        this._queryData = {
            "query": `query {
                viewer {
                    login
                    bio
                    email
                    location
                    repositories(first: 10, orderBy: {field: PUSHED_AT, direction: DESC}) {
                        edges {
                            node {
                                name
                                createdAt
                                url
                            }
                            cursor
                        }
                        pageInfo {
                            hasNextPage
                        }
                        totalCount
                        totalDiskUsage
                    }
                }
            }`
        };
    }

    getQuery() {
        return this._queryData;
    }
}

module.exports = {
    Query
};
