const express = require('express');
const bodyParser = require('body-parser');
const {persistOrder, getOrders} = require('./order_routes');
const {updateOrderStatus} = require('./order_status_routes');
const {orderStatusStatus} = require('./../enums');

const app = express();
const port = 3001;
const hostname = '127.0.0.1';

app.use(bodyParser.json());

app.post('/order', async (request, response) => {
    await persistOrder(request.body);
    response.status(200).send('Order Placed');
});

app.get('/order', (request, response) => {
    getOrders(response);
});

app.patch('/orderstatus', (request, response) => {
    if (!orderStatusStatus.includes(request.body.status)) {
        response.status(400).send('Bad Request: invalid order status');
    } else {
        updateOrderStatus(request.body.orderId, request.body.status);
        response.status(200).send('OrderStatus updated');
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

exports.app = app;
