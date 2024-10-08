# FASE FAQ app

## Introduction
This is a self contained application intended to run in dev mode with a supporting json server for serving the data, remember that you need to ensure that react is available as the pull from the repository does not bring in the node files for a dev environment. 

## Available Scripts Installation, and running

In the project directory:
- Check node is here
    - `node --version` - gets a version back, if not then install
    - `npm --version` - gets a version back, which should happen by default if node is there

- `npm install` 
- `npm start`

The data for the application is served from json so you will need to also start the appropriate json-server on port 8000

check that it is installed first and if not, then from the application directory install it using npm :

`npm install -g json-server`

`json-server --watch faqData.json --port 8000`

