import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import Login from "./pages/Login";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route>
					<Route path='/' element={<Login />} />
					<Route path="/dashboard" element={<DashboardLayout />}>
						<Route index element={<Dashboard />} />
						<Route path="settings" element={<Settings />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>	
	);
}

export default App;
