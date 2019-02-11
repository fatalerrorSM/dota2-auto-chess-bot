const dotenv = require('dotenv');
const path = require('path');

const root = path.join.bind(this,__dirname)
dotenv.config({path:root('.env')});

let config = {};

config.BOT_USERNAME = process.env.BOT_USERNAME;
config.CHANNEL_NAME = process.env.CHANNEL_NAME;
config.OAUTH_TOKEN = process.env.OAUTH_TOKEN;
config.URL = process.env.URL;

module.exports = config;