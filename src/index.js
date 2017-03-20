#!/usr/bin/env node
"use strict";

//Load necessary modules
const jsonfile = require("jsonfile")
const request = require("request");
const yargs = require("yargs");

//Load custom modules
const query = require("./query");

//Get the command line arguments
const commandLineArgv = yargs
    .usage("Usage: kwiregh -q [option]")
    .options({
        q: {
            demand: true,
            alias: "query",
            describe: "Type of user query (b, e, f, l, o, r)",
            string: true,
            type: "string"
        }
    })
    .example('kwiregh -q b', "show user's bio")
    .example('kwiregh -q e', "show user's email")
    .example('kwiregh -q f', "show user's followers")
    .example('kwiregh -q l', "show user's login name")
    .example('kwiregh -q o', "show user's organizatons")
    .example('kwiregh -q r', "show user's repositories")
    .help()
    .alias("help", "h")
    .argv;

//Get the settings for the application
let settingsFile = __dirname + "/settings.json";
let settings = jsonfile.readFileSync(settingsFile);

let queryObj = new query.Query();
queryObj.createQuery(commandLineArgv.query);

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
    let resBody = JSON.stringify(body.data.viewer, null, 2);
    console.log("Requested Data: ", resBody);
});
