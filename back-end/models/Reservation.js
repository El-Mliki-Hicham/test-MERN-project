const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reservationDate: {
    type: Date,
    required: true,
  },
  messsage: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  service: {
    type: String,
    required: true,
    trim: true,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 0,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "cancelled"],
    default: "pending",
  }
}, { timestamps: true });

module.exports = mongoose.model("Reservation", reservationSchema);
