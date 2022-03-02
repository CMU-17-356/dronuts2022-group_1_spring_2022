const express = require('express');
const bodyParser = require('body-parser');
const {persistOrder, getOrders} = require('./order_routes');
const {startDatabase} = require('../db/db');
const cors = require('cors');

const app = express();
const port = 3001;
const hostname = '127.0.0.1';

app.use(cors());
app.use(bodyParser.json());

app.post('/order', async (request, response) => {
    const success = await persistOrder(request.body);
    response.send(success ? 'Order Placed' : 'Validation Error');
});

app.get('/order', (request, response) => {
    getOrders(response);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

exports.app = app;
