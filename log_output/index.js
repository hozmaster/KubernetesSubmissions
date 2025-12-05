const crypto = require("crypto");

const generateUUIDNow = () => {
    const uuid4 = crypto.randomUUID()
    const d = new Date();
    console.log(d.toISOString() + ' ' + uuid4);
    setTimeout(generateUUIDNow, 5000)
}

generateUUIDNow();