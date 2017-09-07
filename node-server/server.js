const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Richard',
        likes: ['food', 'coding']
    })

});

app.get('/about', (req, res) => {
    res.send('about page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'unable to fulfill request'
    });
});

app.listen(3000);