const app = require('./app');
const PORT = process.env.PORT || 3010;

const fs = require('node:fs');

const theDirectory = '/usr/src/app/files/';
const theFile = 'timestamp.log';

function randomString(length = 30) {
    return [...Array(length + 10)].map((value) => (Math.random() * 1000000).toString(36).replace('.', '')).join('').substring(0, length);
}

const writeDataToFileSystem = async (data) => new Promise(res => {
    fs.writeFileSync(theDirectory + theFile, data, err => {
        if (err) {
            throw err;
        }
    });
})

const generateRandomString = () => {
    const d = new Date();
    const randomHash = randomString();
    const dataToBeWritten = d.toISOString() + ' ' + randomHash;
    writeDataToFileSystem(dataToBeWritten).then();
    setTimeout(generateRandomString, 5000)
}

app.listen(PORT, () => {
    generateRandomString();
    console.log("Server started in port " + PORT);
});
