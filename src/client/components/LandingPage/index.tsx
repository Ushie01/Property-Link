import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ContactUs from "./components/ContactUs";
import ServiceApartment from "./components/ServiceApartment";
import TopAgent from "./components/TopAgents";
import WayToRent from "./components/WayToRent";

const LandingPage = () => {
	return (
		<div>
			<Header />
			<InfoSection />
			<ServiceApartment />
			<TopAgent />
			<WayToRent />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default LandingPage;
