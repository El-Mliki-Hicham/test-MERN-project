const {validationResult} = require("express-validator");
const Reservation = require("../models/Reservation.js");

exports.getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json({
      success: true,
      data: reservations,
    });
  }catch(error){
    res.status(500).json({
        success: false,
        message: "Error creating reservation",
        error: error.message,
      });
  }
}


exports.storeReservation = async (req, res) => {
  try {
  // check validation request
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
      return res.status(500).json({ 
          success: false,
          errors: validationError.array() 
      });
  }

    const reservation = new Reservation(req.body);
    await reservation.save();

    res.status(200).json({
      success: true,
      data: reservation,
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating reservation",
      error: error.message,
    });
  }
};


