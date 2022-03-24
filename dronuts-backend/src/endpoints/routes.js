const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {persistOrder, getOrders} = require('./order_routes');
const {updateOrderStatus} = require('./order_status_routes');
const {orderStatusStatus} = require('./../enums');
const {persistDonut, getDonuts} = require('./donut_routes');


const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());

app.post('/order', async (request, response) => {
    await persistOrder(request.body);
    response.status(200).send('Order Placed');
});

app.get('/order', (request, response) => {
    getOrders(response);
});

app.get('/donuts', (request, response) => {
    getDonuts(response);
});

app.post('/donut', async (request, response) => {
    persistDonut(request.body, response);
});


app.patch('/orderstatus', (request, response) => {
    if (!orderStatusStatus.includes(request.body.status)) {
        response.status(400).send('Bad Request: invalid order status');
    } else {
        updateOrderStatus(request.body.orderId, request.body.status);
        response.status(200).send('OrderStatus updated');
    }
});

app.listen(port, () => {
    console.log(`Server listening on localhost:${port}/`);
});

exports.app = app;
