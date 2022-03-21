const {startDatabase} = require('../db/db');
const {default: store_item_schema} = require('../schema/storeItem_schema');

function getDonuts(response) {
    const client = startDatabase();
    client.connect(function(err, client) {
        const collection = client.db('dronuts').collection('Store_Item');
        donuts = collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            response.status(200).send(result);
            client.close();
        });
    });
}

function persistDonut(requestBody, response) {
    const client = startDatabase();
    client.connect(function(err, client) {
        const collection = client.db('dronuts').collection('Store_Item');
        try {
            const new_donut = new store_item_schema(requestBody);
            new_donut.validate();
            collection.insertOne(new_order, function() {
                client.close();
            });
            response.status(200).send(new_order)
        } catch (error) {
            console.error(error);
            response.status(500).send(error);
        }
    });
}

exports.getDonuts = getDonuts;
exports.persistDonut = persistDonut;
