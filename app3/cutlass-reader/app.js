const express = require('express');
const app = express();
const fs = require('node:fs');

app.get('/', (req, res) => {
    const timestamp = fs.readFileSync('/usr/src/app/files/timestamp.log');
    res.send(timestamp);
});

module.exports = app;