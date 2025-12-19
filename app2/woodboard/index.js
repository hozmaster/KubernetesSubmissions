const fs = require("node:fs");

const app = require('./app');
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    fs.writeFileSync('/usr/src/app/files/ping_counter.inf', 'Ping / pongs: 0');
    console.log("The pong Server started in port " + PORT);
});
