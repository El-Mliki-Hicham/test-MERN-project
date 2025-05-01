const Reservation = require("../models/Reservation.js");

exports.getAllReservations = async () => {
    return await Reservation.find();
  };
  
  exports.storeReservation = async (reservationData) => {
    const reservation = new Reservation(reservationData);
    return await reservation.save();
  };