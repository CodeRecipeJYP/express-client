const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Not injung!");
});

app.listen(3000);