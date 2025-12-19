const express = require('express');
const fs = require('node:fs');

const {generateUUIDHash} = require("./library/hashgenerator");
const app = express();
const appIdentifier = generateUUIDHash();



app.get('/', (req, res) => {

    const d = new Date();
    const hashCode = d.toISOString() + '&#160;&#160;&#160;' + generateUUIDHash();
    const data = fs.readFileSync('/usr/src/app/files/ping_counter.inf', 'utf8');
    const reply = `${hashCode} \n <br>` +
        `${data} \n`;
    res.send (reply);
})

module.exports = app;