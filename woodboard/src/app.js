const express = require('express');

const app = express();

let pongCounter = 0;

app.get('/pingpong', (req, res) => {
    res.send(`pong ${pongCounter}`);
    pongCounter ++;
});

module.exports = app;