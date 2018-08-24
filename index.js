'use strict';

const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const path = require('path');
const favicon = require('serve-favicon');

const buildPath = path.join(__dirname, 'build');
const faviconPath = path.join(__dirname, 'build', 'favicon.ico');
const app = express();

app.use(favicon(faviconPath));
app.use('/', express.static(buildPath));

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  awsServerlessExpress.proxy(server, event, context);
};
