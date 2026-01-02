const axios = require("axios");

const getAllTodos = async () => {
    const res = await axios({
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // url: 'http://cutlass-backend-svc:2346/todos',
        url: 'http://localhost:3010/todos',
    }).catch(error => {
        console.log(error);
    });
    let data = '[]';
    if (res && res.data !== undefined) {
        data = res.data;
    }
    return JSON.parse(data);
}

module.exports = {getAllTodos}