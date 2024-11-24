import React, { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing_page";
import Login from "./pages/Login";
import Register from "./pages/Register.jsx";
import HelpPage from "./pages/Help.jsx";
import AboutUs from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import BookingPage from "./pages/BookingPage.jsx";
import CarBookingsPage from "./pages/CarBookingsPage.jsx";

const ProtectedRoute = ({ element: Component, ...rest }) => {
	const { token, navigate } = useContext(AppContext);

	if (token) {
		return <Component {...rest} />;
	} else {
		navigate("/login");
	}
};

function App() {
	return (
		<div className="bg-gradient-to-r from from-blue-900 via-purple-600  to-black min-h-screen w-screen m-0 p-0">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/help" element={<HelpPage />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/register" element={<Register />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/booking/:id" element={<BookingPage />} />
				<Route path="/carbookings" element={<CarBookingsPage />} />
				{/* <Route
					path="/dashboard"
					element={<ProtectedRoute element={Dashboard} />}
				/> */}
			</Routes>
		</div>
	);
}

export default App;
