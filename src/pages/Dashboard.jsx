import { useLocalStorage } from "@uidotdev/usehooks";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";

function Dashboard() {
	const [studentData, setStudentData] = useState([]);
	useEffect(() => {
		console.log(window.localStorage.getItem("students"));
		const data = window.localStorage.getItem("students");
		if (data) {
			setStudentData(JSON.parse(data));
		}
	}, []);

	useEffect(() => {
		if (studentData.length)
			window.localStorage.setItem(
				"students",
				JSON.stringify(studentData)
			);
	}, [studentData]);

	return (
		<div className="flex flex-col p-8 font-DM">
			<div className="flex justify-between gap-4">
				<h1 className=" text-[#2D2D2D] font-bold text-2xl">
					Dashboard
				</h1>
				<div className="flex gap-4">
					<div className="flex gap-2 justify-between w-[200px] items-center border-gray-300 border px-2 font-medium py-1 rounded">
						<span> 31-Jan-2024 </span>
						<DateIcon />
					</div>
					{/* <button className="text-white bg-[#FCA63A] font-bold rounded px-3 py-1">
						{" "}
						Add Student
					</button> */}
				</div>
			</div>

			<div className="p-4 mt-8">
				{ studentData && <Stats studentData={studentData} /> }
			</div>

			<div className="p-4 mt-8">
				{studentData && (
					<TableComponent
						data={studentData}
						setStudentData={setStudentData}
					/>
				)}
			</div>
		</div>
	);
}

const Stats = ({studentData}) => {
	const calculateAttendance = () => {
		let present = 0;
		let absent = 0;
	
		studentData.forEach(student => {
			if (student.Attendance == 1) {
			  present += 1;
			} else {
			  absent += 1;
			}
		  });
		
	
		return { present, absent };
	  };
	
	// Calculate attendance stats
	const { present, absent } = calculateAttendance(); 
	const data = [
		{
			title: "Total Students",
			value: studentData.length,
		},
		{
			title: "Total Student Present",
			value: present
		},
		{
			title: "Total Student Absent",
			value: absent,
		},
	];
	return (
		<div className="flex flex-wrap -mx-6">
			{/* Card component repeated for each stat */}
			{data.map((d, i) => {
				return (
					<div className="w-full md:w-1/3 px-4">
						<div className="border border-gray-200 rounded-lg bg-white p-6 py-8">
							<div className="text-4xl font-bold">{d.value}</div>
							<div className="text-gray-600">{d.title}</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const TableComponent = ({ data, setStudentData }) => {
	const pageSize = 10;
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		// Filter data based on search term across all properties
		const filtered = searchTerm
			? data.filter((item) =>
				Object.values(item).some(value =>
					value.toString().toLowerCase().includes(searchTerm.toLowerCase())
				)
			)
			: data;
		setFilteredData(filtered);
	}, [searchTerm, data]);

	useEffect(() => {
        setCurrentPage(0);
    }, [searchTerm]);

	const paginatedData = filteredData.slice(
		currentPage * pageSize,
		(currentPage + 1) * pageSize
	);

	const totalPages = Math.ceil(filteredData.length / pageSize);

	const goToNextPage = () =>
		setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
	const goToPreviousPage = () =>
		setCurrentPage((prev) => Math.max(prev - 1, 0));

	const handleAttendanceToggle = (studentId, checked) => {
		const updatedData = data.map((student) =>
			student.StudentID === studentId
				? { ...student, Attendance: checked }
				: student
		);
		setStudentData(updatedData);
	};

	return (
		<div>
			<div className="flex justify-between mb-4">
				<h1 className=" text-[#2D2D2D] font-bold text-xl">
					List of Students
				</h1>
				<input
					type="text"
					placeholder="Search Students"
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="px-4 py-2 border rounded"
				/>
			</div>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white">
					<thead>
						<tr>
							<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Student ID
							</th>
							<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Student Name
							</th>
							<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Class
							</th>
							<th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
								Mark Attendance
							</th>
						</tr>
					</thead>
					<tbody className="text-sm">
						{paginatedData.map((student, index) => (
							<tr key={student.StudentID}>
								<td className="py-2 px-4 border-b border-gray-200 text-[#2D2D2D]">
									{student.StudentID}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-[#2D2D2D]">
									{student.StudentName}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-[#2D2D2D]">
									{student.ClassName}
								</td>
								<td className="py-2 px-4 border-b border-gray-200 text-[#2D2D2D]">
									<Switch
										onChange={(checked) =>
											handleAttendanceToggle(
												student.StudentID,
												checked
											)
										}
										checked={student.Attendance}
									/>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="flex justify-between items-center mt-4">
				<button
					onClick={goToPreviousPage}
					disabled={currentPage === 0}
					className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50 text-sm"
				>
					Previous
				</button>
				<span className="text-sm">
					Page {currentPage + 1} of {totalPages}
				</span>
				<button
					onClick={goToNextPage}
					disabled={currentPage === totalPages - 1}
					className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 disabled:opacity-50 text-sm"
				>
					Next
				</button>
			</div>
		</div>
	);
};
function DateIcon() {
	return (
		<svg
			width="16"
			height="16"
			viewBox="0 0 16 16"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.1429 0C14.6577 0 15.8972 1.1789 15.9939 2.66929L16 2.85714V13.1429C16 14.6577 14.8211 15.8972 13.3307 15.9939L13.1429 16H2.85714C1.34231 16 0.102813 14.8211 0.00607736 13.3307L0 13.1429V2.85714C0 1.34231 1.1789 0.102813 2.66929 0.00607736L2.85714 0H13.1429ZM14.8571 4.57143H1.14286V13.1429C1.14286 14.0339 1.82273 14.7662 2.69204 14.8493L2.85714 14.8571H13.1429C14.0339 14.8571 14.7662 14.1772 14.8493 13.308L14.8571 13.1429V4.57143ZM4.57143 10.2857C5.20261 10.2857 5.71429 10.7974 5.71429 11.4286C5.71429 12.0598 5.20261 12.5714 4.57143 12.5714C3.94025 12.5714 3.42857 12.0598 3.42857 11.4286C3.42857 10.7974 3.94025 10.2857 4.57143 10.2857ZM8 10.2857C8.6312 10.2857 9.14286 10.7974 9.14286 11.4286C9.14286 12.0598 8.6312 12.5714 8 12.5714C7.36881 12.5714 6.85714 12.0598 6.85714 11.4286C6.85714 10.7974 7.36881 10.2857 8 10.2857ZM4.57143 6.85714C5.20261 6.85714 5.71429 7.36881 5.71429 8C5.71429 8.6312 5.20261 9.14286 4.57143 9.14286C3.94025 9.14286 3.42857 8.6312 3.42857 8C3.42857 7.36881 3.94025 6.85714 4.57143 6.85714ZM8 6.85714C8.6312 6.85714 9.14286 7.36881 9.14286 8C9.14286 8.6312 8.6312 9.14286 8 9.14286C7.36881 9.14286 6.85714 8.6312 6.85714 8C6.85714 7.36881 7.36881 6.85714 8 6.85714ZM11.4286 6.85714C12.0598 6.85714 12.5714 7.36881 12.5714 8C12.5714 8.6312 12.0598 9.14286 11.4286 9.14286C10.7974 9.14286 10.2857 8.6312 10.2857 8C10.2857 7.36881 10.7974 6.85714 11.4286 6.85714ZM13.1429 1.14286H2.85714C1.96606 1.14286 1.23377 1.82273 1.1507 2.69204L1.14286 2.85714V3.42857H14.8571V2.85714C14.8571 1.96606 14.1772 1.23377 13.308 1.1507L13.1429 1.14286Z"
				fill="#2DAEC0"
			/>
		</svg>
	);
}

export default Dashboard;
