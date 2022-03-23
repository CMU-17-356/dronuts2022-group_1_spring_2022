const {startDatabase} = require('../db/db');
const {default: order_schema} = require('../schema/order_schema');
const {default: order_status_schema} = require('../schema/order_status_schema');

async function persistOrder(requestBody) {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order');
        const num_orders = await collection.countDocuments();
        const orderId = num_orders + 1;
        const timestamp = Date.now();

        requestBody.id = orderId;
        requestBody.timeStamp = timestamp;

        console.log(requestBody);
        try {
            const new_order = new order_schema(requestBody);
            new_order.validate();
            collection.insertOne(new_order); 
        } catch (error) {
            console.error(error);
            throw err;
        } finally {
            const droneId = Math.floor(Math.random() * 6) + 1;
            order_status = {orderId: orderId, droneId: droneId, status: 'Pending'}
            const new_order_status = new order_status_schema(order_status);
            new_order_status.validate()
            const status_collection = client.db('dronuts').collection('Order_Status');
            status_collection.insertOne(new_order_status, function() {
                client.close();
            });
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
