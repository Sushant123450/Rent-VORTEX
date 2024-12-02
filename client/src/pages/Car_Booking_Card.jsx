import React from "react";
import { Link } from "react-router-dom";

const Car_Booking_Card = ({ car }) => {
	return (
		<div
			key={car._id}
			className="relative bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
		>
			<div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-300 rounded-full opacity-40 animate-pulse"></div>

			<img
				src={car.image}
				alt={car.name}
				className="w-full h-56 object-cover rounded-t-xl"
			/>

			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800">{car.name}</h3>
				<p className="text-sm text-gray-500">₹{car.rentPerHour} per hour</p>
				<Link to={`/booking/${car._id}`} state={{ car }}>
					<button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
						Book Now
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Car_Booking_Card;
