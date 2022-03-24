const {startDatabase} = require('../db/db');

function updateOrderStatus(orderId, orderStatus) {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order_Status');
        await collection.updateOne({'orderId': orderId}, {$set: {'status': orderStatus}});
        client.close();
    });
}

exports.updateOrderStatus = updateOrderStatus;
