const express = require('express');
var router = express.Router();
const {getReservations ,storeReservation} = require('../controllers/reservationController');
const reservationValidation = require('../validators/reservationValidator')

router.get('/index',getReservations);
router.get('/store',reservationValidation,storeReservation);

module.exports = router;
