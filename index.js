#!/usr/bin/env node
"use strict";

var request = require("request");

var postData = {
    "query": `query {
        viewer {
            login
            bio
            repository(name: "tewp") {
                name
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
        console.error("error posting json: ", err)
        throw err
    }
    var headers = res.headers
    var statusCode = res.statusCode
    console.log("statusCode: ", statusCode)
    console.log("body: ", body)
})

//XXX
//curl -H "Authorization: bearer token" -X POST -d ' { "query": "query { viewer { login }}" } ' https://api.github.com/graphql
//var postData = {
//    "query": "query { viewer { login bio }}"
//};

