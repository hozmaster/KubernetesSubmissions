const express = require('express');
const {generateShortHash} = require("./library/hashgenerator");

const app = express();

const appIdentifier = generateShortHash();

app.get('/', (req, res) => {
    const uuidHash = generateShortHash();
    console.log('--------------------')
    console.log(`Responding with ${uuidHash}`)
    res.send(`${appIdentifier}: ${uuidHash}`);
});

app.get ('/hashtime', (req, res) => {
    const d = new Date();
    const hashCode = d.toISOString() + ' ' + generateShortHash();
    res.send (hashCode);
})

module.exports = app;