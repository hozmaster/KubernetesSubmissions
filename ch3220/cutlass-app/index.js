const app = require('./src/app');
const fs = require("node:fs");
const {initSystem} = require("./src/library/image");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    initSystem().then(() => {
            console.log("Server started in port " + PORT);
        }
    );
});
