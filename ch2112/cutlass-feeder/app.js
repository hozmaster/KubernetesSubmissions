const express = require('express');
const fs = require('node:fs');
const axios = require('axios');
const app = express();
const path = require('path');

const appPath = '/usr/src/app';
const theImageFile = appPath + '/files/image.jpg';
const infoFile = appPath + '/files/ch2112.json';
const tenMinutesInMs = 10 * 60 * 1000;

let feeder_info = {
    update: false
}

const writeDataToFileSystem = async (data) => new Promise(res => {
    fs.writeFileSync(targetFolder + the_file, data, err => {
        if (err) {
            throw err;
        }
    });
})

function shouldFetchNewOne() {
    let tooOld = false;
    try {
        const now = Date.now();
        if (fs.existsSync(theImageFile)) {
            const stats = fs.statSync(theImageFile);
            const lastUpdated = stats.mtimeMs;
            if (now - lastUpdated > tenMinutesInMs) {
                feeder_info = JSON.parse(fs.readFileSync(infoFile, {encoding: 'utf8', flag: 'r'}));
                if (feeder_info.update) {
                    tooOld = true;
                }
            }
        } else {
            tooOld = true;
        }
    } catch (error) {
        console.log(error);
    }
    return tooOld;
}

fetchImageFile = async () => {
    const response = await axios.get('https://picsum.photos/200/300', {responseType: 'stream'})
    response.data.pipe(fs.createWriteStream(theImageFile));
}

const startDaemonProcess = () => {
    if (shouldFetchNewOne()) {
        fetchImageFile().then(() => {
            feeder_info.update = false;
            fs.writeFileSync(infoFile, JSON.stringify(feeder_info));
        });
    }
    setTimeout(startDaemonProcess, 1000)
}

initSystem = async () => {
    try {
        if (!fs.existsSync(theImageFile)) {
            await fetchImageFile();
        }
        if (!fs.existsSync(infoFile)) {
            fs.writeFileSync(infoFile, JSON.stringify(feeder_info));
        }
    } catch (error) {
        console.log(error);
    }
}

initSystem().then(r => startDaemonProcess());

module.exports = app;