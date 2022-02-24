const {MongoClient, ServerApiVersion} = require('mongodb');

function startDatabase() {
    const uri = 'mongodb+srv://msobkov:ntks1o32A1D584kf@cluster0.bz5co.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1});
    return client;
}

exports.startDatabase = startDatabase;
