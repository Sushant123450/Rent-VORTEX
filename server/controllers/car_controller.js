const Car = require("../models/cars_model");

exports.getAllCars = async (req, res) => {
	console.log("Get All Car Called");
	try {
		const cars = await Car.find();
		res.send(cars);
	} catch (error) {
		return res.status(400).json(error);
	}
};
exports.addCar = async (req, res) => {
	console.log("Add Car Called");
	try {
		const newcar = new Car(req.body);
		await newcar.save();
		res.send("Car added successfully");
	} catch (error) {
		return res.status(400).json(error);
	}
};

exports.editCar = async (req, res) => {
	console.log("Edit Car Called");
	try {
		const car = await Car.findOne({ _id: req.body._id });
		car.name = req.body.name;
		car.image = req.body.image;
		car.fuelType = req.body.fuelType;
		car.rentPerHour = req.body.rentPerHour;
		car.capacity = req.body.capacity;

		await car.save();

		res.send("Car details updated successfully");
	} catch (error) {
		return res.status(400).json(error);
	}
};

exports.deleteCar = async (req, res) => {
	console.log("Delete Car Called");
	try {
		await Car.findOneAndDelete({ _id: req.body.carid });

		res.send("Car deleted successfully");
	} catch (error) {
		return res.status(400).json(error);
	}
};
