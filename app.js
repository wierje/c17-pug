'use strict';

const express = require('express');
const app = express();

app.use(static('public'));

app.set('view engine', 'pug');

const names = ['Larry', 'Curly', 'Moe', 'Captain Kangaroo'];
app.get('/', (req, res, next) => {
    res.render('index', { subtitle: "this came from my JS data", names, loggedIn: false })
});

const port = process.env.PORT || 3000
app.set('port', port);

app.listen(port, () => {
    console.log('Listening on port ${port}')
});