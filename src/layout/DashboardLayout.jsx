import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../logo.png";
import user from "../user.png";

function DashboardLayout() {
	const Location = useLocation();
	return (
		<div className="flex max-w-screen min-h-screen bg-gray-100">
			
			<div className="w-[240px] hidden lg:block">
				<Sidebar Location={Location} />
			</div>
			<div className="flex-grow flex flex-col">
				<TopBar />
				<Outlet />
			</div>
			
		</div>
	);
}

const TopBar = () => {
	return (
		<div className="bg-[#FCA63A] shadow-md h-16 flex items-center justify-between px-6">
			<div className="flex items-center">
				<div className="relative">
					<input
						type="search"
						className="bg-white w-[40dvw] appearance-none border-2 border-gray-200 rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-300"
						placeholder="Search by student name"
					/>
					<button className="absolute right-0 top-0 mt-2 mr-4">
						<svg
							width="20"
							height="19"
							viewBox="0 0 20 19"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<ellipse
								cx="9.80553"
								cy="9.31525"
								rx="7.49047"
								ry="7.11594"
								stroke="#8B8B8B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M15.0153 14.6341L17.9519 17.4167"
								stroke="#8B8B8B"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</button>
				</div>
			</div>

			<div className="flex items-center">
				<img
					className="h-10 w-10 rounded-full object-cover"
					src={user}
					alt="Profile"
				/>
			</div>
		</div>
	);
};



const Sidebar = ({ Location }) => {
	return (
		<div className="bg-white shadow-xl min-h-screen h-full  w-[240px] py-8 overflow-y-auto duration-300 ease-linear fixed">
			<div className="flex flex-col items-center">
				<div className="flex flex-col items-center justify-center">
					<img src={logo} alt="ATS Logo" className="w-20 h-20 mb-4" />
					<h2 className="font-Roboto-slab text-[#2D4972] font-bold text-xl mt-[-24px]">
						ATS
					</h2>
				</div>
				<div className="flex flex-col w-full py-4">
					<NavLink
						to="/dashboard"
						className={`flex gap-3 p-4 font-medium text-md  ${
							Location.pathname === "/dashboard"
								? " bg-[#F5F5F5]  text-black "
								: " text-[#8B8B8B]"
						}`}
					>
						<span className="menu-icon">
							{" "}
							{Location.pathname === "/dashboard" ? (
								<DashboardIconActive />
							) : (
								<DashboardIconInActive />
							)}{" "}
						</span>
						<span className="font-Roboto-slab">Dashboard</span>
					</NavLink>
					<NavLink
						to="/dashboard/settings"
						className={`flex gap-3 p-4 font-medium text-md ${
							Location.pathname === "/dashboard/settings"
								? " bg-[#F5F5F5]  text-black "
								: " text-[#8B8B8B]"
						}`}
					>
						<span className="menu-icon">
							{" "}
							{Location.pathname === "/dashboard/settings" ? (
								<SettingIconActive />
							) : (
								<SettingIconInactive />
							)}{" "}
						</span>
						<span className="font-Roboto-slab">Settings</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

function DashboardIconInActive() {
	return (
		<>
			<svg
				width="27"
				height="25"
				viewBox="0 0 27 25"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					opacity="0.4"
					d="M18.0849 2.08331H21.8942C23.4717 2.08331 24.75 3.27691 24.75 4.74994V8.30678C24.75 9.77981 23.4717 10.9734 21.8942 10.9734H18.0849C16.5074 10.9734 15.2291 9.77981 15.2291 8.30678V4.74994C15.2291 3.27691 16.5074 2.08331 18.0849 2.08331Z"
					fill="#8B8B8B"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.10584 2.08331H8.91505C10.4926 2.08331 11.7709 3.27691 11.7709 4.74994V8.30678C11.7709 9.77981 10.4926 10.9734 8.91505 10.9734H5.10584C3.52829 10.9734 2.25 9.77981 2.25 8.30678V4.74994C2.25 3.27691 3.52829 2.08331 5.10584 2.08331ZM5.10584 14.0266H8.91505C10.4926 14.0266 11.7709 15.2202 11.7709 16.6932V20.25C11.7709 21.7221 10.4926 22.9166 8.91505 22.9166H5.10584C3.52829 22.9166 2.25 21.7221 2.25 20.25V16.6932C2.25 15.2202 3.52829 14.0266 5.10584 14.0266ZM21.8942 14.0266H18.0849C16.5074 14.0266 15.2291 15.2202 15.2291 16.6932V20.25C15.2291 21.7221 16.5074 22.9166 18.0849 22.9166H21.8942C23.4717 22.9166 24.75 21.7221 24.75 20.25V16.6932C24.75 15.2202 23.4717 14.0266 21.8942 14.0266Z"
					fill="#8B8B8B"
				/>
			</svg>
		</>
	);
}

function DashboardIconActive() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="27"
			height="25"
			viewBox="0 0 27 25"
			fill="none"
		>
			<path
				opacity="0.4"
				d="M18.085 2.08331H21.8942C23.4717 2.08331 24.75 3.27691 24.75 4.74994V8.30678C24.75 9.77981 23.4717 10.9734 21.8942 10.9734H18.085C16.5074 10.9734 15.2291 9.77981 15.2291 8.30678V4.74994C15.2291 3.27691 16.5074 2.08331 18.085 2.08331Z"
				fill="#FCA63A"
			/>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M5.10584 2.08331H8.91505C10.4926 2.08331 11.7709 3.27691 11.7709 4.74994V8.30678C11.7709 9.77981 10.4926 10.9734 8.91505 10.9734H5.10584C3.52829 10.9734 2.25 9.77981 2.25 8.30678V4.74994C2.25 3.27691 3.52829 2.08331 5.10584 2.08331ZM5.10584 14.0266H8.91505C10.4926 14.0266 11.7709 15.2202 11.7709 16.6932V20.25C11.7709 21.7221 10.4926 22.9166 8.91505 22.9166H5.10584C3.52829 22.9166 2.25 21.7221 2.25 20.25V16.6932C2.25 15.2202 3.52829 14.0266 5.10584 14.0266ZM21.8942 14.0266H18.0849C16.5074 14.0266 15.2291 15.2202 15.2291 16.6932V20.25C15.2291 21.7221 16.5074 22.9166 18.0849 22.9166H21.8942C23.4717 22.9166 24.75 21.7221 24.75 20.25V16.6932C24.75 15.2202 23.4717 14.0266 21.8942 14.0266Z"
				fill="#FCA63A"
			/>
		</svg>
	);
}

function SettingIconInactive() {
	return (
		<svg
			width="26"
			height="25"
			viewBox="0 0 26 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.6909 4.71293C10.7546 4.83819 10.7967 4.97234 10.8155 5.11024L11.1635 10.1126V10.1126L11.3363 12.627C11.3381 12.8855 11.38 13.1424 11.4608 13.3894C11.6695 13.8685 12.1715 14.173 12.7176 14.1518L21.0392 13.6256C21.3995 13.6199 21.7475 13.7502 22.0066 13.9878C22.2224 14.1858 22.3618 14.4449 22.4057 14.7235L22.4204 14.8927C22.0761 19.5022 18.5739 23.3468 13.8154 24.3392C9.05694 25.3317 4.17733 23.2352 1.82589 19.188C1.14798 18.0122 0.724563 16.7198 0.580477 15.3867C0.520286 14.992 0.493782 14.5934 0.501224 14.1947C0.493793 9.25289 4.13434 4.98049 9.23042 3.95052C9.84376 3.8582 10.445 4.17207 10.6909 4.71293Z"
				fill="#8B8B8B"
			/>
			<path
				opacity="0.4"
				d="M14.0875 0.417677C19.7873 0.557852 24.5778 4.51993 25.5 9.85654L25.4912 9.89591V9.89591L25.466 9.95318L25.4695 10.1104C25.4564 10.3186 25.3733 10.519 25.2299 10.6809C25.0806 10.8495 24.8766 10.9643 24.6519 11.0088L24.515 11.027L14.914 11.6283C14.5946 11.6588 14.2766 11.5592 14.0391 11.3545C13.8412 11.1838 13.7147 10.9535 13.679 10.7053L13.0345 1.4378C13.0233 1.40647 13.0233 1.3725 13.0345 1.34116C13.0433 1.08571 13.1597 0.844244 13.3575 0.670715C13.5554 0.497186 13.8183 0.406053 14.0875 0.417677Z"
				fill="#8B8B8B"
			/>
		</svg>
	);
}

function SettingIconActive() {
	return (
		<svg
			width="30"
			height="29"
			viewBox="0 0 30 29"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.6909 6.71293C12.7546 6.83819 12.7967 6.97234 12.8155 7.11024L13.1635 12.1126V12.1126L13.3363 14.627C13.3381 14.8855 13.38 15.1424 13.4608 15.3894C13.6695 15.8685 14.1715 16.173 14.7176 16.1518L23.0392 15.6256C23.3995 15.6199 23.7475 15.7502 24.0066 15.9878C24.2224 16.1858 24.3618 16.4449 24.4057 16.7235L24.4204 16.8927C24.0761 21.5022 20.5739 25.3468 15.8154 26.3392C11.0569 27.3317 6.17733 25.2352 3.82589 21.188C3.14798 20.0122 2.72456 18.7198 2.58048 17.3867C2.52029 16.992 2.49378 16.5934 2.50122 16.1947C2.49379 11.2529 6.13434 6.98049 11.2304 5.95052C11.8438 5.8582 12.445 6.17207 12.6909 6.71293Z"
				fill="#FCA63A"
			/>
			<path
				opacity="0.4"
				d="M16.0875 2.41768C21.7874 2.55785 26.5779 6.51993 27.5 11.8565L27.4912 11.8959V11.8959L27.466 11.9532L27.4695 12.1104C27.4565 12.3186 27.3733 12.519 27.23 12.6809C27.0806 12.8495 26.8766 12.9643 26.652 13.0088L26.515 13.027L16.914 13.6283C16.5947 13.6588 16.2767 13.5592 16.0392 13.3545C15.8413 13.1838 15.7148 12.9535 15.679 12.7053L15.0346 3.4378C15.0234 3.40647 15.0234 3.3725 15.0346 3.34116C15.0434 3.08571 15.1597 2.84424 15.3576 2.67071C15.5554 2.49719 15.8183 2.40605 16.0875 2.41768Z"
				fill="#FCA63A"
			/>
		</svg>
	);
}
export default DashboardLayout;
