const express = require('express');

const app = express.Router();
const routes = require('./index');


app.use(express.json());
app.use('/', routes);

module.exports = app;
