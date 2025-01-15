const express = require("express");
const router = express.Router();
const {
	bookCar,
	getAllBookings,
	cancelBooking,
} = require("../controllers/booking_controller");

router.post("/bookcar", bookCar);
router.get("/getallbookings", getAllBookings);
router.delete("/cancelbooking/:bookingID", cancelBooking);

module.exports = router;
