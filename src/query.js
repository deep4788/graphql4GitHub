#!/usr/bin/env node
"use strict";

let queryData = require("./querydata");

/**
* @brief This class handles query object
*/
class Query {
    constructor() {
        this._queryData = { "query": queryData.LOGIN };
    }

    createQuery(queryField) {
        if(queryField === "b") {
            this._queryData = { "query": queryData.BIO };
        }
        else if(queryField === "e") {
            this._queryData = { "query": queryData.EMAIL };
        }
        else if(queryField === "f") {
            this._queryData = { "query": queryData.FOLLOWERS };
        }
        else if(queryField === "l") {
            this._queryData = { "query": queryData.LOGIN };
        }
        else if(queryField === "o") {
            this._queryData = { "query": queryData.ORGS };
        }
        else if(queryField === "r") {
            this._queryData = { "query": queryData.REPOS };
        }
        else {
            this._queryData = { "query": queryData.LOGIN };
        }
    }

    getQuery() {
        return this._queryData;
    }
}

module.exports = {
    Query
};
