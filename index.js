//** FOR FUTURE USE */
const express = require('express');
const app = express();
const port = 8081;

app.get('/', (req, res) => {
    res.send(index.html);
});

app.listen(port, (err) => {
    console.log("Server started at " + port);
});
