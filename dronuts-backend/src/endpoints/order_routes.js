const {startDatabase} = require('../db/db');
const {default: order_schema} = require('../schema/order_schema');
const {persistOrderStatus} = require('./order_status_routes');

async function persistOrder(requestBody) {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order');
        const num_orders = await collection.countDocuments();
        const orderId = num_orders + 1;
        requestBody.id = orderId;
        try {
            const new_order = new order_schema(requestBody);
            new_order.validate();
            collection.insertOne(new_order, function() {
                client.close();
            });
            persistOrderStatus(orderId);
        } catch (error) {
            throw err;
        }
    });
}

function getOrders(response) {
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
}

exports.persistOrder = persistOrder;
exports.getOrders = getOrders;
