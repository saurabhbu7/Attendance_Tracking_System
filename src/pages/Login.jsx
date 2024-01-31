import React, { useEffect } from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
	const naviagte = useNavigate()
	const InitialData = [
		{ StudentID: '001', StudentName: 'Alex Smith', PhoneNo: '+23 4570 000', Attendance: 0 },
		{ StudentID: '002', StudentName: 'Maria Johnson', PhoneNo: '+23 4570 173', Attendance: 0 },
		{ StudentID: '003', StudentName: 'James Williams', PhoneNo: '+23 4570 246', Attendance: 0 },
		{ StudentID: '004', StudentName: 'Emily Jones', PhoneNo: '+23 4570 319', Attendance: 0 },
		{ StudentID: '005', StudentName: 'Daniel Brown', PhoneNo: '+23 4570 482', Attendance: 0 },
		{ StudentID: '006', StudentName: 'Chloe Davis', PhoneNo: '+23 4570 555', Attendance: 0 },
		{ StudentID: '007', StudentName: 'Oliver Miller', PhoneNo: '+23 4570 628', Attendance: 0 },
		{ StudentID: '008', StudentName: 'Sophia Wilson', PhoneNo: '+23 4570 791', Attendance: 0 },
		{ StudentID: '009', StudentName: 'Liam Moore', PhoneNo: '+23 4570 864', Attendance: 0 },
		{ StudentID: '010', StudentName: 'Isabella Taylor', PhoneNo: '+23 4570 937', Attendance: 0 },
		{ StudentID: '011', StudentName: 'Ethan Anderson', PhoneNo: '+23 4571 000', Attendance: 0 },
		{ StudentID: '012', StudentName: 'Mia Thomas', PhoneNo: '+23 4571 173', Attendance: 0 },
		{ StudentID: '013', StudentName: 'Noah Jackson', PhoneNo: '+23 4571 246', Attendance: 0 },
		{ StudentID: '014', StudentName: 'Ava White', PhoneNo: '+23 4571 319', Attendance: 0 },
		{ StudentID: '015', StudentName: 'Lucas Harris', PhoneNo: '+23 4571 482', Attendance: 0 },
		{ StudentID: '016', StudentName: 'Emma Martin', PhoneNo: '+23 4571 555', Attendance: 0 },
		{ StudentID: '017', StudentName: 'Mason Thompson', PhoneNo: '+23 4571 628', Attendance: 0 },
		{ StudentID: '018', StudentName: 'Charlotte Garcia', PhoneNo: '+23 4571 791', Attendance: 0 },
		{ StudentID: '019', StudentName: 'Logan Martinez', PhoneNo: '+23 4571 864', Attendance: 0 },
		{ StudentID: '020', StudentName: 'Amelia Robinson', PhoneNo: '+23 4571 937', Attendance: 0 },
		{ StudentID: '021', StudentName: 'Benjamin Clark', PhoneNo: '+23 4572 000', Attendance: 0 },
		{ StudentID: '022', StudentName: 'Harper Rodriguez', PhoneNo: '+23 4572 173', Attendance: 0 },
		{ StudentID: '023', StudentName: 'Carter Lewis', PhoneNo: '+23 4572 246', Attendance: 0 },
		{ StudentID: '024', StudentName: 'Evelyn Lee', PhoneNo: '+23 4572 319', Attendance: 0 },
		{ StudentID: '025', StudentName: 'William Walker', PhoneNo: '+23 4572 482', Attendance: 0 }
	]
	// const InitialData = [
	// 	{ StudentID: '001', StudentName: 'John Bailey', PhoneNo: '+23 4567 123', Attendance: 0 },
	// 	{ StudentID: '002', StudentName: 'John Bailey', PhoneNo: '+23 4567 123', Attendance: 0 },
	// 	{ StudentID: '003', StudentName: 'John Bailey', PhoneNo: '+23 4567 123', Attendance: 0 },
	// 	{ StudentID: '004', StudentName: 'John Bailey', PhoneNo: '+23 4567 123', Attendance: 0 },
	// 	{ StudentID: '005', StudentName: 'John Bailey', PhoneNo: '+23 4567 123', Attendance: 0 },
	// 	{ StudentID: '006', StudentName: 'John Doe', PhoneNo: '+23 4567 123', Attendance: 0 }
	// ]
	useEffect(() => {
		const data = window.localStorage.getItem("students")
		if (!data) {
			window.localStorage.setItem("students", JSON.stringify(InitialData))
		}

	}, [])

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
			<div className="flex flex-col items-center justify-center">
				<img src={logo} alt="ATS Logo" className="w-20 h-20 mb-4" />
				<h2 className="font-Roboto-slab text-[#2D4972] font-bold text-2xl mt-[-24px]">
					ATS
				</h2>
			</div>
			<h3 className="text-2xl py-8 font-bold text-center font-Roboto-slab text-[#2D4972]">
				Login to Attendance Tracker System (ATS)
			</h3>
			<div className="px-8 py-6 mt-4 text-left bg-white shadow-lg w-full sm:w-[75%] lg:w-[35%] rounded-xl">
				<form action="">
					<div className="mt-4 flex flex-col gap-4 font-DM">
						<div>
							<label className="block" for="email">
								Email
							</label>
							<input
								type="email"
								placeholder="Enter Email"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
						</div>
						<div className="mt-4">
							<label className="block">Password</label>
							<input
								type="password"
								placeholder="Enter Password"
								className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
							/>
							<div className="flex items-center justify-between mt-4">
								<div>
									<label className="inline-flex items-center">
										<input
											type="checkbox"
											className="form-checkbox"
											name="remember"
										/>
										<span className="ml-2">
											Keep me signed in
										</span>
									</label>
								</div>
								<div>
									<a
										href="/forgot"
										className="text-sm text-blue-600 hover:underline"
									>
										Forgot password?
									</a>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-between mt-4">
							<button onClick={() => {
								naviagte("/dashboard")
							}} className="w-full px-6 py-4 leading-5 text-white transition-colors duration-200 transform bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600">
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="text-center text-sm text-gray-500 mt-4">
				This page is protected by Google reCAPTCHA to ensure you're not
				a bot.{" "}
				<a href="/learn-more" className="text-blue-600 hover:underline">
					Learn more
				</a>
			</div>
		</div>
	);
}

export default Login;
