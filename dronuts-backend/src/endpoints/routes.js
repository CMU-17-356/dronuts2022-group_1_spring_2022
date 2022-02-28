const express = require('express');
const bodyParser = require('body-parser');
const {persistOrder, getOrders} = require('./order_routes');

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(bodyParser.json());

app.post('/order', async (request, response) => {
    await persistOrder(request.body);
    response.status(200).send('Order Placed');
});

app.get('/order', (request, response) => {
    getOrders(response);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

exports.app = app;
