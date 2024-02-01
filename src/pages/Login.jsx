import React, { useEffect } from "react";
import logo from "../logo.png";
import { useNavigate } from "react-router-dom";
import { DateProvider } from "../helper/utility";

function Login() {
	const naviagte = useNavigate()

	useEffect(() => {
		const InitialData = [
			{ StudentID: '001', StudentName: 'Alex Smith', ClassName: '10th' },
			{ StudentID: '002', StudentName: 'Maria Johnson', ClassName: '9th' },
			{ StudentID: '003', StudentName: 'James Williams', ClassName: '10th' },
			{ StudentID: '004', StudentName: 'Emily Jones', ClassName: '10th' },
			{ StudentID: '005', StudentName: 'Daniel Brown', ClassName: '10th' },
			{ StudentID: '006', StudentName: 'Chloe Davis', ClassName: '10th' },
			{ StudentID: '007', StudentName: 'Oliver Miller', ClassName: '10th' },
			{ StudentID: '008', StudentName: 'Sophia Wilson', ClassName: '9th' },
			{ StudentID: '009', StudentName: 'Liam Moore', ClassName: '10th' },
			{ StudentID: '010', StudentName: 'Isabella Taylor', ClassName: '10th' },
			{ StudentID: '011', StudentName: 'Ethan Anderson', ClassName: '10th' },
			{ StudentID: '012', StudentName: 'Mia Thomas', ClassName: '10th' },
			{ StudentID: '013', StudentName: 'Noah Jackson', ClassName: '10th' },
			{ StudentID: '014', StudentName: 'Ava White', ClassName: '10th' },
			{ StudentID: '015', StudentName: 'Lucas Harris', ClassName: '10th' },
			{ StudentID: '016', StudentName: 'Emma Martin', ClassName: '9th' },
			{ StudentID: '017', StudentName: 'Mason Thompson', ClassName: '10th' },
			{ StudentID: '018', StudentName: 'Charlotte Garcia', ClassName: '10th' },
			{ StudentID: '019', StudentName: 'Logan Martinez', ClassName: '10th' },
			{ StudentID: '020', StudentName: 'Amelia Robinson', ClassName: '10th' },
			{ StudentID: '021', StudentName: 'Benjamin Clark', ClassName: '10th' },
			{ StudentID: '022', StudentName: 'Harper Rodriguez', ClassName: '10th' },
			{ StudentID: '023', StudentName: 'Carter Lewis', ClassName: '9th' },
			{ StudentID: '024', StudentName: 'Evelyn Lee', ClassName: '10th' },
			{ StudentID: '025', StudentName: 'William Walker', ClassName: '10th' }
		]
		const attendanceSheet = {
			[DateProvider()]: InitialData?.map((items) => { return { StudentID: items?.StudentID, StudentName: items?.StudentName, ClassName: items?.ClassName, Attendance: false } })
		}
		const data = window.localStorage.getItem("students")
		const attData = window.localStorage.getItem("attendance")

		if (!data && !attData) {
			window.localStorage.setItem("students", JSON.stringify(InitialData))
			window.localStorage.setItem("attendance", JSON.stringify(attendanceSheet))
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
				{`Login to Attendance Tracker System (ATS)`}
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
