const router = require('express').Router();

let pongCounter = 0;

router.get('/pingpong', (req, res) => {
    pongCounter++;
    res.send(`Pong: ${pongCounter}\n`);
});

router.get('/pings', (req, res) => {
    res.json(JSON.stringify({
        'pings': pongCounter
    }));
});

module.exports = router;