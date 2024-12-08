import React from "react";
import { Link } from "react-router-dom";

import { FaEdit, FaTrash } from "react-icons/fa"; // Import icons from react-icons

const Car_Booking_Card = ({ car, isAdmin }) => {
	return (
		<div
			key={car._id}
			className="relative p-1 bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
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
				<p className="text-sm text-gray-500">{car.type}</p>

				<div className="flex flex-row justify-between">
					{/* Book Now Button */}
					<Link to={`/booking/${car._id}`} state={{ car }}>
						<button className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 transition-all duration-300">
							Book Now
						</button>
					</Link>

					{/* Admin Buttons */}
					{isAdmin && (
						<div className="flex items-center space-x-2 mt-4">
							<Link
								to={`/edit-car/${car._id}`}
								className="text-yellow-500 hover:text-yellow-600"
							>
								<FaEdit size={20} title="Edit" />
							</Link>
							{/* <button
								onClick={() => {
									// Logic to delete the car
									console.log(`Delete car with ID: ${car._id}`);
								}}
								className="text-red-500 hover:text-red-600"
							>
								<FaTrash size={20} title="Delete" />
							</button> */}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Car_Booking_Card;
