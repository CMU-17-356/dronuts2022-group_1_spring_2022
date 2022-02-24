const express = require('express');
const bodyParser = require('body-parser');
const {persistOrder} = require('./order_routes');

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(bodyParser.json());

app.post('/order', (request, response) => {
    console.log(request.body);
    persistOrder(request.body);
    response.send('Hi!');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
