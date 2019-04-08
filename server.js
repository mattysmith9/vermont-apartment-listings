'use strict';
const express = require('express');
const mongoose = require('mongoose');

/* MONGO ATLAS CLUSTER API KEY */
'7f079ae4-2025-474d-ad46-e9446928882c'

const app = express();

const port = process.env.PORT || 5000;

/* DATABASE CONFIG */
const db = require('./config/keys').mongoURI;

/* CONNECT TO MONGO.DB (MLAB) */
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to Mongo'))
  .catch(error => console.log(error));

app.listen(port, () => console.log(`Server running on port ${port}`));
