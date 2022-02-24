const {startDatabase} = require('../db/db');
const {default: order_schema} = require('../schema/order_schema');

async function persistOrder(requestBody) {
    const client = startDatabase();

    client.connect(async function(err, client) {
        const collection = client.db('dronuts').collection('Order');
        const num_orders = await collection.countDocuments();
        console.log();
        requestBody.id = num_orders + 1;
        console.log(requestBody);
        try {
            const new_order = new order_schema(requestBody);
            new_order.validate();

            collection.insertOne(new_order, function() {
                await client.close();
            });
        } catch (error) {
            console.log(error);
            return false;
        }
    });
    return true;
}

exports.persistOrder = persistOrder;
