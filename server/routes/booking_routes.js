const express = require("express");
const router = express.Router();
const {
	bookCar,
	getAllBookings,
} = require("../controllers/booking_controller");

router.post("/bookcar", bookCar);
router.get("/getallbookings", getAllBookings);

module.exports = router;
