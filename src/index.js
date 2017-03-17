#!/usr/bin/env node
"use strict";

//Load necessary modules
const jsonfile = require("jsonfile")
const request = require("request");

//Load custom modules
const query = require("./query");

//Get the settings for the application
let settingsFile = __dirname + "/settings.json";
let settings = jsonfile.readFileSync(settingsFile);
console.dir(settings["OAUTH_TOKEN"]);
console.dir(settings["API_URL"]);

let queryObj = new query.Query();
queryObj.createQuery();
console.dir(queryObj.getQuery());

let cursorID = "xx";

let OAUTH_TOKEN = settings["OAUTH_TOKEN"];
let url = settings["API_URL"] + "/graphql?access_token=" + OAUTH_TOKEN;
let options = {
    method: "post",
    body: queryObj.getQuery(),
    json: true,
    url: url,
    headers: {
        "User-Agent": "deep4788"
    }
};

request(options, function(err, res, body) {
    if(err) {
        console.error("Error: while making a POST request to GitHub GraphQL API: ", err);
        throw err;
    }

    //Get the response body
    let resBody = JSON.stringify(body, null, 2);
    //XXX "cursor": "Y3Vyc29yOjIwMTUtMTItMDhUMDA6NTQ6MjYtMDY6MDA="
    //let cursorPatt = /"cursor": "\w+(.)"/g;
    //console.log("regCursor: ", cursorPatt.test(resBody));
    //console.log("regCursor: ", resBody.match(cursorPatt));
    //let aaa = resBody.match(cursorPatt);

    //aaa.forEach(function(value, index) {
    //    console.log("value: " + value);
    //    console.log("value.substr(): " + value.substr(10));
    //});




    console.log("resBody[0]: ", resBody[0]);
    console.log("resBody: ", resBody);
})
