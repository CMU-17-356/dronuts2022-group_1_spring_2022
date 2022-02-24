const express = require('express');
const bodyParser = require('body-parser');
const {startDatabase} = require('../db/db');
const router = express.Router();
const app = express();
const {default: order_schema} = require('../schema/order_schema');

// //Here we are configuring express to use body-parser as middle-ware.
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// router.post('/order',(request,response) => {
// //code to perform particular action.
// //To access POST variable use req.body()methods.
// console.log(request.body);
// });

// // add router in the Express app.
// app.use("/", router);


const new_order = new order_schema({id: 1, customerId: 12, items: [1, 1, 1, 2, 3, 4], address: '5000 Forbes Ave.', timestamp: new Date()});
new_order.validate();


const client = startDatabase();

client.connect(function(err, client) {
    const collection = client.db('dronuts').collection('Order');
    collection.insertOne(new_order, function() {
        client.close();
    });
});

