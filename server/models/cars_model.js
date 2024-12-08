const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		image: {
			type: String,
			required: true,
		},
		capacity: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			enum: ["Luxury", "Economy", "SUV", "Comfort"],
		},
		fuelType: {
			type: String,
			required: true,
		},
		rentPerHour: {
			type: Number,
			required: true,
		},
		bookedTimeSlots: [
			{
				from: {
					type: String,
					required: true,
				},
				to: {
					type: String,
					required: true,
				},
			},
		],
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("cars", carSchema);
