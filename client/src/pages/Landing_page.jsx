import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import Img1 from "../assets/Car_img1.jpg";
import Img2 from "../assets/Car_img2.jpg";
import Img3 from "../assets/Car_img3.jpg";
import Logo from "../assets/logo.jpg"; // Import the uploaded logo
import { AppContext } from "../context/AppContext";

const LandingPage = () => {
	const { token, navigate } = useContext(AppContext);
	const signUpButtonHandle = (e) => {
		e.preventDefault();

		if (token) {
			navigate("/dashboard");
		} else {
			navigate("/login");
		}
	};
	return (
		<div className="flex flex-col justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-600 to-black">
			<header className="flex justify-between items-center px-6 py-4">
				{/* Logo on the top left */}
				<div className="flex items-center">
					<img src={Logo} alt="Rent Vortex Logo" className="w-40 h-35" />{" "}
					{/* Adjust size as needed */}
				</div>

				<nav className="flex space-x-10 text-white text-2xl ">
					<a
						href="/"
						className="hover:text-purple-300 transition duration-300 border-b-[5px]"
					>
						Home
					</a>
					<a className="hover:text-purple-300 transition duration-300 border-b-[5px]">
						<Link to="/help">Help</Link>
					</a>
					<a
						href="/about"
						className="hover:text-purple-300 transition duration-300 border-b-[5px]"
					>
						About Us
					</a>
				</nav>

				<div className="flex space-x-4">
					<button
						className="text-white border border-white rounded px-4 py-2 hover:bg-white hover:text-purple-600 transition duration-300"
						onClick={signUpButtonHandle}
					>
						Sign In
					</button>

					<Link to="/register">
						<button className="text-white bg-purple-600 border border-purple-600 rounded px-4 py-2 hover:bg-white hover:text-purple-600 transition duration-300">
							Sign Up
						</button>
					</Link>
				</div>
			</header>

			<main className="flex flex-col justify-center items-center text-center py-15">
				<h1 className="text-5xl font-extrabold text-white leading-tight mb-8 font-mono">
					“Accelerate Your Journey with Us”
				</h1>

				<div className="flex gap-6 overflow-hidden animate-pan">
					{/* Image cards with hover effects */}
					<div className="w-[250px] rounded-3xl bg-gray-100 relative overflow-hidden transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-2">
						<img
							src={Img1}
							className="h-full w-auto object-cover"
							alt="Car Image 1"
							loading="lazy"
						/>
					</div>

					<div className="w-[250px] rounded-3xl bg-gray-100 relative overflow-hidden transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-2">
						<img
							src={Img2}
							className="h-full w-auto object-cover"
							alt="Car Image 2"
							loading="lazy"
						/>
					</div>

					<div className="w-[250px] rounded-3xl bg-gray-100 relative overflow-hidden transition-transform transform hover:scale-110 hover:shadow-lg hover:-translate-y-2">
						<img
							src={Img3}
							className="h-full w-auto object-cover"
							alt="Car Image 3"
							loading="lazy"
						/>
					</div>
				</div>
			</main>
		</div>
	);
};

export default LandingPage;
