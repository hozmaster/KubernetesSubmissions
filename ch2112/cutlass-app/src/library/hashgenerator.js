const crypto = require("crypto");
const fs = require("node:fs");
const tenMinutesInMs = 10 * 60 * 1000;

const generateUUIDHash = () => {
    return crypto.randomUUID()
}

const generateShortHash = () => {
    return Math.random().toString(36).slice(2)
}

function isImageOldEnough (theImageFile)
{
    let isTooOld = false;
    try {
        const now = Date.now();
        const stats = fs.statSync(theImageFile);
        const lastUpdated = stats.mtimeMs;
        if (now - lastUpdated > tenMinutesInMs) {
            isTooOld = true;
        }
    } catch (error ) { }
    return isTooOld;
}

module.exports = {generateUUIDHash, generateShortHash, isImageOldEnough}