#!/usr/bin/env node
"use strict";

var request = require("request");

var postData = {
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
                    endCursor
                    hasNextPage
                }
                totalCount
                totalDiskUsage
            }
        }
    }`
};

var OAUTH_TOKEN = "<your-oauth-token>";
var url = "https://api.github.com/graphql?access_token=" + OAUTH_TOKEN;
var options = {
    method: "post",
    body: postData,
    json: true,
    url: url,
    headers: {
        "User-Agent": "<your-github-username>"
    }
};

request(options, function(err, res, body) {
    if(err) {
        console.error("Error making POST to GitHub GraphQL: ", err);
        throw err;
    }
    var headers = res.headers;
    var statusCode = res.statusCode;
    console.log("statusCode: ", statusCode);
    console.log("body: ", JSON.stringify(body, null, 2));
})
