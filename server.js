'use strict';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apartments = require('./model/CraigslistApt');
const MongoClient = require('mongodb').MongoClient;
const port = process.env.PORT || 5000;
const app = express();

/* DATABASE CONFIG */
const dbUrl = require('./config/keys').mongoURI;
const dbArray = dbUrl.split('/');
const dbName = dbArray[dbArray.length - 1];

/* MIDDLEWARE SHIT */
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* CONNECT TO MONGO.DB (MONGO ATLAS) */
mongoose
  .connect(dbUrl, { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo'))
  .catch(error => console.log(error));

/* OPEN (OR RE-USE) A CONNECTION TO THE DB AND RETURN MONGODB CLIENT */
async function theClient() {
  console.log('calling client');
  console.log(`Connecting to ${dbUrl}...`);
  if (connection) {
    return connection;
  } else {
    connection = await MongoClient.connect(dbUrl, { useNewUrlParser: true });
    console.log('Connected to database.');
    return connection;
  }
}

async function cApartments() {
  const client = await theClient();
  const db = client.db(dbName);
  const apartments = db.collection('craigslistapts');
  return apartments;
}

async function all() {
  let results = await apartments();
  return results.find({}).sort([['timestamp', 1]]);
}

const main_router = express.Router();
main_router.use(function(req, res, next) {
  console.log('Something');
  next();
});

main_router.get('/', function(req, res) {
  res.json({ message: 'Fuck' });
});

app.use('/', main_router);

app.get('/test/craigslistapts', async (request, response, closeConnection) => {
  const results = await apartments();
  console.log(`Sending ${results.length} results`);
  response.send(results);
  closeConnection();
});

app.listen(port, () => console.log(`FUCKING FUCK FUCK ${port}`));
