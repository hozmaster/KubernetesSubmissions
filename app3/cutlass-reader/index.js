// const express = require('express');
// const app = express();

const app = require('./app');
const PORT = process.env.PORT || 3011;

app.listen(PORT, () => {
    console.log("Server started in port " + PORT);
});
