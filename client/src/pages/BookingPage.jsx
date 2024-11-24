import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const BookingPage = () => {
	const { id } = useParams();
	const location = useLocation();
	const navigate = useNavigate();
	const { car } = location.state || {};

	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [driverRequired, setDriverRequired] = useState(false);
	const [totalCost, setTotalCost] = useState(0);

	// Payment Form State
	const [cardNumber, setCardNumber] = useState("");
	const [expiryDate, setExpiryDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [cardName, setCardName] = useState("");

	const calculateTotalCost = () => {
		if (startDate && endDate) {
			const start = new Date(startDate);
			const end = new Date(endDate);
			const hours = Math.ceil((end - start) / (1000 * 60 * 60)); // Total hours
			let cost = hours * car.rentPerHour;
			if (driverRequired === 1) {
				cost += hours * 100; // Add ₹100/hour for the driver
			}
		}
		setTotalCost(cost);
	};

	const handlePayment = async () => {
		if (!cardNumber || !expiryDate || !cvv || !cardName) {
			alert("Please fill all payment details.");
			return;
		}

		// Send booking and payment details to the server
		try {
			// const response = await fetch("/api/bookCar", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/json",
			// 	},
			// 	body: JSON.stringify({
			// 		carId: id,
			// 		startDate,
			// 		endDate,
			// 		driverRequired,
			// 		totalCost,
			// 		cardDetails: {
			// 			cardNumber,
			// 			expiryDate,
			// 			cvv,
			// 			cardName,
			// 		},
			// 	}),
			// });
			// const data = await response.json();
			// if (response.ok ||) {
			if (true) {
				alert("Booking successful!");

				navigate("/dashboard");
			} else {
				alert("Payment failed. Please try again.");
			}
		} catch (error) {
			console.error(error);
			alert("An error occurred. Please try again.");
		}
	};

	return (
		<div className="p-8 min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
			<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 relative">
				{/* Top Section */}
				<div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
					<h1 className="text-3xl font-extrabold text-blue-600 bg-blue-100 py-2 px-4 rounded-full shadow">
						Booking Details
					</h1>
				</div>

				{car ? (
					<div>
						{/* Back Button */}
						<button
							className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow hover:bg-gray-400 transition duration-300"
							onClick={() => navigate(-1)}
						>
							← Back
						</button>

						{/* Car Image */}
						<div className="overflow-hidden rounded-lg shadow-md">
							<img
								src={car.image}
								alt={car.name}
								className="w-full object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>

						{/* Car Details */}
						<div className="mt-6 text-gray-800">
							<h2 className="text-2xl font-semibold text-blue-600">
								{car.name}
							</h2>
							<div className="mt-4 grid grid-cols-2 gap-4">
								<div className="text-sm font-medium text-gray-600">
									<p>
										<span className="font-bold text-gray-800">Capacity:</span>{" "}
										{car.capacity} People
									</p>
									<p>
										<span className="font-bold text-gray-800">Fuel Type:</span>{" "}
										{car.fuelType}
									</p>
								</div>
								<div className="text-sm font-medium text-gray-600">
									<p>
										<span className="font-bold text-gray-800">
											Rent Per Hour:
										</span>{" "}
										₹{car.rentPerHour}
									</p>
									<p>
										<span className="font-bold text-gray-800">Car ID:</span>{" "}
										{id}
									</p>
								</div>
							</div>
						</div>

						{/* Date and Driver Options */}
						<div className="mt-6">
							<label className="block text-gray-700">
								Start Date:
								<input
									type="datetime-local"
									value={startDate}
									onChange={(e) => {
										setStartDate(e.target.value);
										calculateTotalCost();
									}}
									className="w-full p-2 border rounded-lg mt-1"
								/>
							</label>
							<label className="block text-gray-700 mt-4">
								End Date:
								<input
									type="datetime-local"
									value={endDate}
									onChange={(e) => {
										setEndDate(e.target.value);
										calculateTotalCost();
									}}
									className="w-full p-2 border rounded-lg mt-1"
								/>
							</label>
							<div className="mt-4">
								<label className="flex items-center text-gray-700">
									<input
										type="checkbox"
										checked={driverRequired}
										onChange={(e) => {
											setDriverRequired(e.target.checked);
											calculateTotalCost();
										}}
										className="mr-2"
									/>
									Driver Required (₹100/hour)
								</label>
							</div>
						</div>

						{/* Total Cost */}
						<div className="mt-4 text-xl font-bold text-gray-800">
							Total Cost: ₹{totalCost || "0"}
						</div>

						{/* Payment Form */}
						<div className="mt-6">
							<h3 className="text-lg font-bold text-gray-700">
								Payment Details
							</h3>
							<div className="mt-4 grid grid-cols-1 gap-4">
								<input
									type="text"
									placeholder="Cardholder Name"
									value={cardName}
									onChange={(e) => setCardName(e.target.value)}
									className="w-full p-2 border rounded-lg"
								/>
								<input
									type="text"
									placeholder="Card Number"
									value={cardNumber}
									onChange={(e) => setCardNumber(e.target.value)}
									className="w-full p-2 border rounded-lg"
								/>
								<input
									type="text"
									placeholder="MM/YY"
									value={expiryDate}
									onChange={(e) => setExpiryDate(e.target.value)}
									className="w-full p-2 border rounded-lg"
								/>
								<input
									type="text"
									placeholder="CVV"
									value={cvv}
									onChange={(e) => setCvv(e.target.value)}
									className="w-full p-2 border rounded-lg"
								/>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="mt-8 flex justify-center gap-4">
							<button
								onClick={handlePayment}
								className="px-6 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white font-bold rounded-lg shadow-md hover:from-green-500 hover:to-green-700 transition duration-300"
							>
								Pay Now
							</button>
							<button
								className="px-6 py-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white font-bold rounded-lg shadow-md hover:from-gray-500 hover:to-gray-700 transition duration-300"
								onClick={() => navigate(-1)}
							>
								Cancel
							</button>
						</div>
					</div>
				) : (
					<p className="text-center text-gray-600 text-lg mt-12">
						No car data available. Please return to the dashboard and try again.
					</p>
				)}
			</div>
		</div>
	);
};

export default BookingPage;
