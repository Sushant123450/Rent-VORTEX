const Booking = require("../models/booking_model");
const Car = require("../models/cars_model");
const User = require("../models/user_model");
// const stripe = require("stripe")(
// 	"sk_test_51NFtVGSAZAXtdYSkBaDemNewFODLyLvAZ4Cp8oCxI2m1ecvfG2C1cNpm1B6k6lwIQfD2f9Hxt53gG2hNGExnFVK100raNTKWo4"
// );

exports.bookCar = async (req, res) => {
	const { token } = req.body;
	try {
		const newbooking = new Booking(req.body);
		await newbooking.save();
		const car = await Car.findOne({ _id: req.body.car });
		console.log(req.body.car);
		const user = await User.findOne({ _id: req.body.user });
		car.bookedTimeSlots.push(req.body.bookedTimeSlots);

		await car.save();
		res.send("Your booking is successfull");
	} catch (error) {
		console.log(error);
		return res.status(400).json(error);
	}
};

exports.getAllBookings = async (req, res) => {
	try {
		const bookings = await Booking.find().populate(["car","user"]);
		res.send(bookings);
	} catch (error) {
		console.log(error);
		return res.status(400).json(error);
	}
};
