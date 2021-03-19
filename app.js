const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("<html><head><title>Bitcube Interview</title></head><body bgcolor='#c0c0c0'><h3> This is my Bitcube interview</h3></body></html>");
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log("We are Live")
});