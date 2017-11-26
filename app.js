const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
];

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/cards', (req, res) => {
    // #2
    res.locals.prompt = "Who is buried in Grant's tomb?";
    res.locals.hint = "hintshints";
    res.locals.colors = colors;
    res.render("card");

    // #1
    // res.render("card", { prompt: "Who is buried in Grant's tomb?" });
});

app.get('/cards2', (req, res) => {
    res.locals.prompt = "Who is buried in Grant's tomb?2";
    res.render("card");
});

app.listen(3000);