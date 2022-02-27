const express = require('express');
const bodyParser = require('body-parser');
const {persistOrder} = require('./order_routes');
const {startDatabase} = require('../db/db');

const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(bodyParser.json());

app.post('/order', async (request, response) => {
    const success = await persistOrder(request.body);
    response.send(success ? 'Order Placed' : 'Validation Error');
});

app.get('/order', (request, response) => {
    const client = startDatabase();
    client.connect(function(err, db) {
        if (err) throw err;
        const dbo = db.db('dronuts');
        dbo.collection('Order').find({}).toArray(function(err, result) {
            if (err) throw err;
            response.status(200).send(result);
            db.close();
        });
    });
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

exports.app = app;
