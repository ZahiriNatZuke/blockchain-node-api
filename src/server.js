const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes');
const Web3 = require('web3');
const mongodb = require('mongodb').MongoClient;
const CONTACT_ABI = require('./config');
const CONTACT_ADDRESS = require('./config');

app.use(cors());
app.use(express.json());

const web3 = new Web3('http://localhost:7545');

mongodb.connect('mongodb://127.0.0.1:27017/blockchain-node-api', {
        useUnifiedTopology: true
    },
    async (err, client) => {
        const db = client.db('Cluster0');
        const accounts = await web3.eth.getAccounts();
        const contract = await new web3.eth.Contract(CONTACT_ABI.CONTACT_ABI, CONTACT_ADDRESS.CONTACT_ADDRESS);

        routes(app, db, accounts, contract);
        app.listen(process.env.PORT || 3001, () => {
            console.log('listening on port ' + (process.env.PORT || 3001));
        });
    });
