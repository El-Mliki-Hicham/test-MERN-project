const { body } = require("express-validator");

const reservationValidation = [
  body("user")
    .notEmpty()
    .withMessage("User ID is required")
    .isMongoId()
    .withMessage("Invalid user ID format"),

  body("reservationDate")
    .notEmpty()
    .withMessage("Reservation date is required")
    .isISO8601()
    .withMessage("Invalid date format"),

  body("messsage")
    .notEmpty()
    .withMessage("Message is required")
    .trim()
    .isLength({ max: 500 })
    .withMessage("Message cannot exceed 500 characters"),

  body("service").notEmpty().withMessage("Service is required").trim(),

  body("totalPrice")
    .notEmpty()
    .withMessage("Total price is required")
    .isNumeric()
    .withMessage("Total price must be a number")
    .custom((value) => value >= 0)
    .withMessage("Total price cannot be negative"),

//   body("status")
//     .optional()
//     .isIn(["pending", "confirmed", "cancelled"])
//     .withMessage("Invalid status value"),
];

module.exports = reservationValidation;
