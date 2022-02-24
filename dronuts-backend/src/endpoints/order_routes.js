const {startDatabase} = require('../db/db');
const {default: order_schema} = require('../schema/order_schema');

function persistOrder(requestBody) {
    const new_order = new order_schema(requestBody);
    new_order.validate();
    console.log(new_order);
    const client = startDatabase();

    client.connect(function(err, client) {
        const collection = client.db('dronuts').collection('Order');
        collection.insertOne(new_order, function() {
            client.close();
        });
    });
}

exports.persistOrder = persistOrder;
