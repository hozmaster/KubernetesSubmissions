const axios = require("axios");

const getPingCounter = async () => {
    const res = await axios({
        method: 'get',
        url: 'http://scimitar-backend-svc.exercises/pings',
    });
    return JSON.parse(res.data).pings;
}

module.exports = {getPingCounter}