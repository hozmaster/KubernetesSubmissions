const express = require('express');
const app = express();
const fs = require('node:fs');
const path = require('path');
const {isImageOldEnough} = require("./library/hashgenerator");

const applicationPath = '/usr/src/app';
const theImageFilePath = path.join(applicationPath, '/files/image.jpg');
const infoFile = path.join(applicationPath, '/files/ch2112.json');
app.use(express.static(path.join(applicationPath, '/files')));

app.set('view engine', 'pug')
app.set('views', './src/views')

app.get('/', (req, res) => {
    const tooOld = isImageOldEnough(theImageFilePath);
    res.render('home', {title: 'K8s', message: 'The project App'})
    if (tooOld) {
        const data = {update: true};
        fs.writeFileSync(infoFile, JSON.stringify(data));
    }
});


module.exports = app;