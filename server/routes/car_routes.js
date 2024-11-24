const express = require("express");
const router = express.Router();
const {
	getAllCars,
	addCar,
	editCar,
	deleteCar,
} = require("../controllers/car_controller");

router.get("/getallcars", getAllCars);
router.post("/addcar", addCar);
router.post("/editcar", editCar);
router.post("/deletecar", deleteCar);

module.exports = router;
