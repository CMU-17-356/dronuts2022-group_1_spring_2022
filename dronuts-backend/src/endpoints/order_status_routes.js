const {startDatabase} = require('../db/db');

function updateOrderStatus(orderId, orderStatus) {
    const client = startDatabase();
    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order_Status');
        await collection.updateOne({'orderId': orderId}, {$set: {'status': orderStatus}});
        client.close();
    });
}

function getOrderStatuses(response) {
    const client = startDatabase();
    client.connect(function(err, db) {
        if (err) throw err;
        const dbo = db.db('dronuts');
        dbo.collection('Order_Status').find({}).toArray(function(err, result) {
            if (err) throw err;
            response.status(200).send(result);
            db.close();
        });
    });
}

exports.updateOrderStatus = updateOrderStatus;
exports.getOrderStatuses = getOrderStatuses;