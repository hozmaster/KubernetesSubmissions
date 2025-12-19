const express = require('express');
const fs = require('node:fs');

const app = express();

let pongCounter = 0;

const writeDataToFileSystem = async (data) => new Promise(res => {
    fs.writeFileSync('/usr/src/app/files/ping_counter.inf', data, err => {
        if (err) {
            throw err;
        }
    });
})

app.get('/pingpong', (req, res) => {
    pongCounter ++;
    writeDataToFileSystem('Ping / pongs: ' +  pongCounter).then();
    res.send(`Pong: ${pongCounter}\n`);
});

module.exports = app;