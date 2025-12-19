const app = require('./app');
const PORT = process.env.PORT || 3010;

const fs = require('node:fs');

app.listen(PORT, () => {
    generateRandomString();
    console.log("Server started in port " + PORT);
});
