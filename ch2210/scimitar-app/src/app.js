const express = require('express');

const {generateUUIDHash} = require("./library/hashgenerator");
const {getPingCounter} = require("./library/ping_handler");

const app = express();

app.get('/', async (req, res) => {
    const d = new Date();
    const hashCode = d.toISOString() + '&#160;&#160;&#160;' + generateUUIDHash();
    const pings = await getPingCounter();
    const reply = `${hashCode} \n <br>` +
        `Ping / Pongs: ${pings} \n`;
    res.send(reply);
})

module.exports = app;