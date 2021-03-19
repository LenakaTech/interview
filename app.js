const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<html><head><title>Bitcube Interview</title></head><body bgcolor='#c0c0c0'><h3> This is my Bitcube interview</h3></body></html>");
});

app.listen(8080, () => {
    console.log("We are Live")
});