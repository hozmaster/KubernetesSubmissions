const express = require('express');
const app = express();
const fs = require('node:fs');
const path = require('path');
const {isImageOldEnough} = require("./library/hashgenerator");
const {getAllTodos} = require("./library/todo");
const {base64Encode} = require('./library/base64');
app.use('/api', require('./routes/todo'));

const applicationPath = '/usr/src/app';
const theImageFilePath = path.join(applicationPath, '/files/image.jpg');
const infoFile = path.join(applicationPath, '/files/ch2112.json');
app.use(express.static(path.join(__dirname, '/public')));

app.use(express.json());
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const tooOld = isImageOldEnough(theImageFilePath);
    const todos = getAllTodos();
    const base64Image = base64Encode(theImageFilePath);
    res.render('home', {ipsumImage: base64Image, todos: todos})
    if (tooOld) {
        const data = {update: true};
        fs.writeFileSync(infoFile, JSON.stringify(data));
    }
});


module.exports = app;