const mongoose = require('mongoose');

const craigslistAptSchema = new mongoose.Schema({
  url: String,
  timestamp: Date,
  title: String,
  price: {},
  neighborhood: {},
  rooms: String,
  size: {}
});

const CraigslistApt = mongoose.model('CraigslistApt', craigslistAptSchema);

module.exports = CraigslistApt;

/*  MONGO ATLAS CLUSTER API KEY 
('7f079ae4-2025-474d-ad46-e9446928882c'); */
