Graphql 4 GitHub (UNDER DEVELOPMENT)
================

`kwiregh`: An API to query your GitHub account using GraphQL.

Query (*kwirē*) + GitHub (gh) => **kwiregh**

Description
-----------
A project to get some feel for GraphQL and how GitHub exposes its data access API.

**Good reads:**

1. [GraphQL vs REST](https://philsturgeon.uk/api/2017/01/24/graphql-vs-rest-overview/)
2. [RFC Specification for GraphQL](http://facebook.github.io/graphql/)

Installation
------------
- Add your OAUTH token in *src/settings.json*
- Install Node.js and npm
- `cd graphql4GitHub`
- `npm install -g`

Usage
-----

```sh
Usage: kwiregh -q [option]

Options:
  -q, --query  Type of user query (b, e, f, l, o, r)         [string] [required]
  --help, -h   Show help                                               [boolean]

Examples:
  kwiregh -q b  show user's bio
  kwiregh -q e  show user's email
  kwiregh -q f  show user's followers
  kwiregh -q l  show user's login name
  kwiregh -q o  show user's organizatons
  kwiregh -q r  show user's repositories

```

Future Improvements / New Features / Issues
-------------------------------------------
- Once GitHub changes its cursor method to paginate through repositories, organizatons etc., the query data should use the cursor.
    - Currently the query data just requests a set number of records for repositories, followers etc.
    - Other method: we can also do parsing of the returned data and get the last cursor value from the current returned page and update the query at runtime with this cursor to get the next page and hence paginate to get all the data for repositories, followers etc.

Author
------
Deep Aggarwal  
deep.uiuc@gmail.com  
Date Started: 03/11/2017  
