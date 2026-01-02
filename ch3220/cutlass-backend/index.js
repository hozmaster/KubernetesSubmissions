const app = require('./src/app');
const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
    console.log("The todo started in port " + PORT);
});
