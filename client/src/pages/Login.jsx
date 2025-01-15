import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Img4 from "../assets/Car-img4.jpg";
import { initCarModel } from "../components/CarModel";
import { AppContext } from "../context/AppContext";

function Login() {
	const { loading, setLoading, handleLogin, navigate } = useContext(AppContext);
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	useEffect(() => {
		initCarModel();
	}, []);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		// console.log(formData);

		e.preventDefault();
		handleLogin(formData);
	};

	return (
		<div className="login h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-purple-600 to-black">
			{loading ? (
				<Spinner />
			) : (
				<div className="flex w-full">
					{/* <div className="lg:w-2/3 relative">
						<img
							className="w-full h-full object-cover"
							src={Img4}
							alt="Car Rental"
							loading="lazy"
						/>
					</div> */}
					<div className="w-2/3 my-auto flex justify-center items-center" loading="lazy">
						<div
							id="car-model-container"
							className="w-full h-[80%] bg-transparent overflow-hidden "
						></div>
					</div>
					<div className="w-1/3 bg-white p-6 rounded-lg shadow-lg m-4">
						<form className="text-left">
							<h1 className="text-3xl font-semibold text-gray-700 mb-4">
								Login
							</h1>
							<hr className="border-gray-300 mb-4" />

							<div className="mb-4">
								<label
									htmlFor="email"
									className="block text-lg font-semibold text-gray-700 mb-2"
								>
									Email
								</label>
								<input
									id="email"
									type="email"
									name="email"
									className="w-full p-3 border border-gray-300 rounded-lg"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
							</div>

							<label
								htmlFor="password"
								className="block text-lg font-semibold text-gray-700 mb-2"
							>
								Password
							</label>
							<div className="mb-6 relative">
								<input
									id="password"
									type={showPassword ? "text" : "password"}
									name="password"
									className="w-full p-3 border border-gray-300 rounded-lg"
									value={formData.password}
									onChange={handleInputChange}
									required
								/>
								<div className="absolute inset-y-0 right-3 flex items-center">
									<button
										type="button"
										onClick={togglePasswordVisibility}
										className="text-gray-600 hover:text-gray-900 text-sm font-medium"
									>
										{showPassword ? "Hide" : "Show"}
									</button>
								</div>
							</div>

							<button
								type="submit"
								onClick={handleSubmit}
								className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition duration-300"
							>
								Login
							</button>

							<hr className="my-4 border-gray-300" />

							<div className="text-center">
								<Link
									to="/register"
									className="text-purple-600 hover:underline text-lg"
								>
									Click Here to Register
								</Link>
							</div>
						</form>
						<div className="mt-4 text-center">
							<button
								onClick={() => navigate("/")}
								className="w-full bg-gray-600 text-white p-3 rounded-lg hover:bg-gray-700 transition duration-300"
							>
								Back to Home
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Login;
