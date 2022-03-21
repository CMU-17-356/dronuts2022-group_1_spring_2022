const {startDatabase} = require('../db/db');

function getDonuts(response) {
    const client = startDatabase();
    client.connect(function(err, client) {
        const collection = client.db('dronuts').collection('Order');
        donuts = collection.find({}).toArray(function(err, result) {
            if (err) throw err;
            response.status(200).send(result);
            client.close();
        });
    });
}

exports.getDonuts = getDonuts;
