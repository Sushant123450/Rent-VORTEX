import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Edit_Car_Page = () => {
	const { cars, loading, setLoading, navigate, editCar } =
		useContext(AppContext);
	const carId = useParams();

	const car = cars.filter((c) => {
		if (c._id == carId.id) {
			console.log("car");

			return c;
		}
	});

	console.log(car);

	const [formData, setFormData] = useState({
		_id: carId.id,
		name: car[0]?.name || "",
		image: car[0]?.image || "",
		capacity: car[0]?.capacity,
		fuelType: car[0]?.fuelType,
		type: car[0]?.type || "Economy",
		rentPerHour: car[0]?.rentPerHour,
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await editCar(formData);
		console.log(res);

		if (res.status === 200) {
			setFormData({
				name: "",
				image: "",
				capacity: "",
				fuelType: "",
				type: "",
				rentPerHour: "",
			});
			navigate("/dashboard");
		}
	};

	return (
		<div className="relative p-8 max-w-3xl mx-auto bg-gray-100 rounded-md shadow-md">
			{/* Dashboard Button */}
			<button
				onClick={() => navigate("/dashboard")}
				className="absolute top-4 left-4 bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500"
			>
				Dashboard
			</button>

			<h1 className="text-2xl font-bold mb-6 text-center">Edit New Car</h1>
			<form onSubmit={handleSubmit}>
				{/* Car Name */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="name">
						Car Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>

				{/* Car Image */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="image">
						Image URL
					</label>
					<input
						type="text"
						id="image"
						name="image"
						value={formData.image}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>

				{/* Capacity */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="capacity">
						Capacity (Number of Seats)
					</label>
					<input
						type="number"
						id="capacity"
						name="capacity"
						value={formData.capacity}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>

				{/* Fuel Type */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="fuelType">
						Fuel Type
					</label>
					<select
						id="fuelType"
						name="fuelType"
						value={formData.fuelType}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					>
						<option value="" disabled>
							Select Fuel Type
						</option>
						<option value="Petrol">Petrol</option>
						<option value="Diesel">Diesel</option>
						<option value="Electric">Electric</option>
					</select>
				</div>
				{/* Type */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="type">
						Type
					</label>
					<select
						id="type"
						name="type"
						value={formData.type}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					>
						<option value="" disabled>
							Select Type
						</option>
						<option value="Economy">Economy</option>
						<option value="Comfort">Comfort</option>
						<option value="SUV">SUV</option>
						<option value="Luxury">Luxury</option>
					</select>
				</div>

				{/* Rent Per Hour */}
				<div className="mb-4">
					<label className="block text-gray-700 mb-2" htmlFor="rentPerHour">
						Rent Per Hour
					</label>
					<input
						type="number"
						id="rentPerHour"
						name="rentPerHour"
						value={formData.rentPerHour}
						onChange={handleChange}
						className="w-full px-4 py-2 border rounded-lg"
						required
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 mb-4"
				>
					Edit Car
				</button>
			</form>
		</div>
	);
};

export default Edit_Car_Page;
