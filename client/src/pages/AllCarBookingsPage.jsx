import React, { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "../components/Spinner";

const GetAllBookings = () => {
	const {
		loading,
		setLoading,
		navigate,
		getAllBookings,
		bookings,
		setBookings,
	} = useContext(AppContext); // Use loading from context

	const [error, setError] = useState("");

	// Fake booking data
	useEffect(() => {
		setLoading(true);
		getAllBookings()
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				console.error("Error fetching cars:", err);
				setLoading(false);
			});
		console.log(bookings);
	}, []);

	return (
		<div className="p-6 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 min-h-screen">
			<div className=" flex flex-row justify-between mx-2">
				<button
					onClick={() => navigate("/dashboard")} // Go back to the previous page
					className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 hover:bg-blue-600 transition-all"
				>
					Back
				</button>
				<h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
					All Bookings
				</h1>
				<div></div>
			</div>

			{/* Loading Spinner */}
			{loading ? (
				<Spinner />
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
					{bookings.length === 0 ? (
						<div className="col-span-full flex items-center justify-center h-64">
							<p className="text-lg font-semibold text-gray-600">
								No Bookings Found
							</p>
						</div>
					) : (
						bookings.map((booking) => (
							<div
								key={booking._id}
								className="relative bg-white shadow-lg rounded-xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
							>
								<img
									src={booking.car.image}
									alt={booking.car.name}
									loading="lazy"
									className="w-full h-48 object-cover rounded-t-xl"
								/>
								<div className="p-4">
									<h3 className="text-lg font-semibold text-gray-800">
										{booking.car.name}
									</h3>
									<p className="text-sm text-gray-500">
										Customer: {booking.user.name}
									</p>
									<p className="text-sm text-gray-500">
										Rent: ₹{booking.totalAmount}
									</p>
									<p className="text-sm text-gray-500">
										Duration: {booking.totalHours} hours
									</p>
								</div>
							</div>
						))
					)}
				</div>
			)}
		</div>
	);
};

export default GetAllBookings;

// const fakeBookings = [
// 	{
// 		_id: "b1",
// 		carName: "Honda Civic",
// 		customerName: "John Doe",
// 		bookingDate: "2024-11-20T09:00:00Z",
// 		rent: 4500,
// 		duration: 6,
// 		carImage:
// 			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX5RsSWpQpdbAZKZTMyU0OsyCINA35xlAXIA&s", // Add car image link
// 	},
// 	{
// 		_id: "b2",
// 		carName: "Toyota Corolla",
// 		customerName: "Jane Smith",
// 		bookingDate: "2024-11-22T13:00:00Z",
// 		rent: 4000,
// 		duration: 5,
// 		carImage:
// 			"data:image/jpeg;base64,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", // Add car image link
// 	},
// ];
