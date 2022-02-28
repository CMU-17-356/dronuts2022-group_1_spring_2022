const {startDatabase} = require('../db/db');

async function persistOrderStatus(orderId) {
    const client = startDatabase();
    client.connect(function(err, client) {
        const collection = client.db('dronuts').collection('Order_Status');
        const droneId = Math.floor(Math.random() * 6) + 1;
        const new_order_status = {orderId: orderId, droneId: droneId, status: 'Pending'};
        collection.insertOne(new_order_status);
        client.close();
    });
}

function updateOrderStatus(orderId, orderStatus) {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order_Status');
        await collection.updateOne({'orderId': orderId}, {$set: {'status': orderStatus}});
        client.close();
    });
}

exports.persistOrderStatus = persistOrderStatus;
exports.updateOrderStatus = updateOrderStatus;
