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


module.exports = app;