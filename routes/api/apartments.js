'use strict';
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const CraigslistApt = require('../../model/CraigslistApt');

/*
 * @route GET api/apartments/test
 * @desc TESTS APARTMENTS ROUTE
 * @access PUBLIC
 */
router.get('/test', (req, res) => res.json({ msg: 'Apartments Work' }));

/*
 * @route GET api/apartments
 * @desc GET APARTMENTS
 * @access PUBLIC
 */
router.get('/craigslistapts', (req, res) => {
  CraigslistApt.find()
    .sort({ date: -1 })
    .then(posts => res.json(craigslistapartments))
    .catch(err =>
      res.status(404).json({ noapartmentsfound: 'No apartments found' })
    );
});

module.exports = router;
