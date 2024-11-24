import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const AppContext = createContext();

function AppContextProvider({ children }) {
	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({});
	const [token, setToken] = useState("");
	const [isAdmin, setIsAdmin] = useState(false);
	const navigate = useNavigate();
	const [cars, setCars] = useState([]);
	const BASE_URL = "http://localhost:5500/api/v1";

	async function handleLogin(data) {
		setLoading(true);

		try {
			const response = await axios.post(`${BASE_URL}/login`, data);
			console.log("Login successful:", response.data);

			setUser(response.data.exisitingUser);
			setToken(response.data.token);

			setIsAdmin(response.data.exisitingUser.role === "Admin");

			navigate("/dashboard");
		} catch (err) {
			console.log("Login error:", err.response?.data || err.message);
		} finally {
			setLoading(false);
		}
	}

	async function handleRegister(data) {
		setLoading(true);
		try {
			data.role = "User";
			const response = await axios.post(`${BASE_URL}/register`, data);
			console.log("Register:", response);

			navigate("/login");
		} catch (err) {
			console.error("Register error:", err.response?.data || err.message);
		} finally {
			setLoading(false);
		}
	}

	function handleLogout() {
		setLoading(true);
		try {
			setUser({});
			setToken(null);
			setIsAdmin(false);
			navigate("/login");

			console.log("User logged out successfully");
		} catch (err) {
			console.error("Logout error:", err);
		} finally {
			setLoading(false);
		}
	}
	function getAllCars() {
		setLoading(true);
		try {
			axios.get(`${BASE_URL}/getallcars`).then((res) => {
				setCars(res.data);
			});
		} catch (err) {
			console.error("Error getting cars data", err);
		} finally {
			setLoading(false);
		}
	}

	const value = {
		loading,
		setLoading,
		user,
		setUser,
		token,
		setToken,
		isAdmin,
		setIsAdmin,
		navigate,
		handleLogin,
		handleRegister,
		handleLogout,
		cars,
		setCars,
		getAllCars,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export default AppContextProvider;
