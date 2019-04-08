'use strict';
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const Apartment = mongoose.model('apartments');
const keys = require('./keys');

const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Apartment.findById(jwt_payload.id)
        .then(apartment => {
          if (apartment) {
            return done(null, apartment);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
