import { useParams, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropertyLocation from "../../components/PropertyLocation/PropertyLocation";
import { Helmet } from "react-helmet-async";
import Button from "../../components/Button/Button";
import { GrLocation } from "react-icons/gr";
import success from "../../assets/success.png";
import { removeFromLocal, saveToLocal } from "../../utilities/local-storage";
import { MdOutlineAreaChart } from "react-icons/md";
import "./TabStyles.css";

const EstateDetails = () => {
	const [selectedEstate, setSelectedEstate] = useState({});
	const [estateLoading, setEstateLoading] = useState(true);
	const estates = useLoaderData();
	const { id } = useParams();
	const [tabIndex, setTabIndex] = useState(0);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		setEstateLoading(true);
		const clickedEstate = estates.find((estate) => estate.id === id);
		setSelectedEstate(clickedEstate);
		setEstateLoading(false);
	}, [estates, id]);

	const {
		estate_image,
		estate_title,
		segment_name,
		description,
		price,
		status,
		area,
		facilities,
		additional_info_1,
		additional_info_2,
		location,
	} = selectedEstate;

	const closeModal = () => {
		setShowModal(false);
	};

	if (estateLoading) {
		return (
			<div className="flex items-center justify-center space-x-2">
				<div className="w-4 h-4 rounded-full animate-pulse dark:bg-red-600"></div>
				<div className="w-5 h-5 rounded-full animate-pulse dark:bg-red-600"></div>
				<div className="w-6 h-6 rounded-full animate-pulse dark:bg-red-600"></div>
			</div>
		);
	}

	return (
		<section className="mx-2 md:mx-8 my-2 md:my-8 p-2 md:px-4">
			<Helmet>
				<title>Details of {estate_title} - ArtisanAxis</title>
			</Helmet>

			<Tabs
				selectedIndex={tabIndex}
				onSelect={(index) => setTabIndex(index)}
			>
				<TabList>
					<Tab>
						<h4 className="font-medium">Property Details</h4>
					</Tab>
					<Tab>
						<h4 className="font-medium">Find on Map</h4>
					</Tab>
				</TabList>

				<TabPanel>
					<div className="space-y-8 px-3 py-2 border border-[#d4d4d4] rounded-lg">
						<div className="flex flex-col lg:flex-row gap-6">
							<div
								data-aos="zoom-out-down"
								data-aos-offset="300"
								data-aos-easing="ease-in-sine"
								data-aos-duration="1000"
								className="w-full lg:w-3/5"
							>
								<div className="relative">
									<img
										className="rounded-lg w-full"
										src={estate_image}
										alt={estate_title}
									/>
									<h5
										className={`bg-opacity-80 absolute top-2 right-0 px-4 text-lg md:text-2xl font-semibold text-white border ${
											status === "sale"
												? "border-[#16a34a] bg-[#16a34a]"
												: "border-[#ea580c] bg-[#ea5d0c]"
										}`}
									>
										{status === "sale" ? "Sale" : "Rent"}
									</h5>
									<h3
										className={`bg-opacity-80 absolute bottom-2 right-0 px-4 text-xl md:text-3xl font-semibold text-white border ${
											status === "sale"
												? "border-[#16a34a] bg-[#16a34a]"
												: "border-[#ea580c] bg-[#ea580c]"
										}`}
									>
										{price}
									</h3>
								</div>
							</div>
							<div
								data-aos="zoom-out-up"
								data-aos-offset="300"
								data-aos-easing="ease-in-sine"
								data-aos-duration="1000"
								className="w-full lg:w-2/5 flex flex-col gap-2"
							>
								<h3
									className={`text-lg md:text-2xl xl:text-3xl font-bold mb-3 ${
										status === "sale"
											? "text-[#2c7844]"
											: "text-[#ea3c0c]"
									}`}
								>
									{estate_title}
								</h3>
								<div className="flex flex-row justify-between">
									<h4
										className={`text-xs md:text-base border rounded-lg px-3 py-2 ${
											status === "sale"
												? "text-[#2c7844] border-[#16a34a] bg-[#e3f8eb]"
												: "text-[#ea580c] border-[#ea580c] bg-[#f9f1ee]"
										}`}
									>
										{segment_name}
									</h4>
									<h4
										className={`flex items-center gap-1 text-xs md:text-base border rounded-lg px-3 py-2 ${
											status === "sale"
												? "text-[#2c7844] border-[#16a34a] bg-[#e3f8eb]"
												: "text-[#ea580c] border-[#ea580c] bg-[#f9f1ee]"
										}`}
									>
										<MdOutlineAreaChart /> {area}
									</h4>
								</div>
								<h4
									data-aos-delay="1300"
									className={`text-xs md:text-base border rounded-lg px-4 py-2 flex gap-2 items-center ${
										status === "sale"
											? "text-[#2c7844] border-[#16a34a] bg-[#e3f8eb]"
											: "text-[#ea580c] border-[#ea580c] bg-[#f9f1ee]"
									}`}
								>
									<GrLocation />
									{location?.street}, {location?.city},{" "}
									{location?.state}-{location?.zip_code}
								</h4>
								<div
									data-aos-delay="1500"
									className={`flex-grow mt-3 border px-4 py-2 ${
										status === "sale"
											? "text-[#2c7844] border-[#16a34a] bg-[#e3f8eb]"
											: "text-[#ea580c] border-[#ea580c] bg-[#f9f1ee]"
									}`}
								>
									<h3 className="md:text-xl font-medium">
										Facilities:
									</h3>
									{facilities?.map((facility, idx) => (
										<li
											key={idx}
											className="text-sm md:text-base pl-4"
										>
											{facility}
										</li>
									))}
								</div>
								<div
									className={`border px-4 py-2 ${
										status === "sale"
											? "text-[#2c7844] border-[#16a34a] bg-[#e3f8eb]"
											: "text-[#ea580c] border-[#ea580c] bg-[#f9f1ee]"
									}`}
								>
									<h3 className="md:text-xl font-medium">
										Other Features:
									</h3>
									<div
										className={`flex-grow flex gap-2 text-xs lg:text-base pl-4 ${
											status === "sale"
												? "text-[#457456]"
												: "text-[#8d6a57]"
										}`}
									>
										<h4 className="font-semibold">
											{additional_info_1?.split(": ")[0]}:
										</h4>
										<h4 className="">
											{additional_info_1?.split(": ")[1]}
										</h4>
									</div>
									<div
										className={`flex-grow flex gap-2 text-xs lg:text-base pl-4 ${
											status === "sale"
												? "text-[#457456]"
												: "text-[#8d6a57]"
										}`}
									>
										<h4 className="font-semibold">
											{additional_info_2?.split(": ")[0]}:
										</h4>
										<h4 className="">
											{additional_info_2?.split(": ")[1]}
										</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col lg:flex-row justify-between gap-6">
							<p className="w-full lg:w-3/5 text-justify text-sm md:text-base">
								<span
									className={`font-semibold ${
										status === "sale"
											? "text-[#16a34a]"
											: "text-[#ea580c]"
									}`}
								>
									Description:
								</span>{" "}
								{description}
							</p>
							<div className="w-full lg:w-2/5 flex justify-between items-center">
								<div>
									<Button
										onClick={() =>
											saveToLocal(
												selectedEstate.id,
												"estates"
											)
										}
										className={"border font-semibold"}
										buttonText={"Add to Favorites"}
										color={`${
											status === "sale"
												? "#16a34a"
												: "#ea580c"
										}`}
										hoverColor={"white"}
										hoverBgColor={"transparent"}
									></Button>
								</div>
								<div>
									<Button
										onClick={() => {
											setShowModal(true);
											removeFromLocal(
												selectedEstate.id,
												"estates"
											);
										}}
										className={"border font-semibold"}
										buttonText={`${
											status === "sale"
												? "Buy Now"
												: "Rent Now"
										}`}
										color={`${
											status === "sale"
												? "#16a34a"
												: "#ea580c"
										}`}
										hoverColor={"white"}
										hoverBgColor={"transparent"}
									></Button>
								</div>
							</div>
						</div>
						{showModal && (
							<dialog
								open
								className="w-4/5 md:w-2/5 h-auto bg-white bg-opacity-95 p-8 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg rounded-lg"
							>
								<div className="flex flex-col items-center justify-center text-center text-[#235d62]">
									<div className="h-full flex justify-center items-center">
										<img
											className="w-1/2"
											src={success}
											alt="Success"
										/>
									</div>
									<h3 className="font-bold text-lg">
										Thank You for Your Interest!
									</h3>
									<p className="py-4">
										One of Our Agents will Contact You Soon!
									</p>
									<div className="">
										<button
											className="px-3 py-2 font-bold rounded-lg bg-[#235d62] text-white border border-[#235d62] hover:text-[#235d62] hover:bg-transparent transition duration-500"
											onClick={closeModal}
										>
											Okay
										</button>
									</div>
								</div>
							</dialog>
						)}
					</div>
				</TabPanel>

				<TabPanel>
					<PropertyLocation
						selectedEstate={selectedEstate}
					></PropertyLocation>
				</TabPanel>
			</Tabs>
		</section>
	);
};

export default EstateDetails;
