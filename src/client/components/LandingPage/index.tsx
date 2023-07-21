import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ContactUs from "./components/ContactUs";
import ServiceApartment from "./components/ServiceApartment";
import TopAgent from "./components/TopAgents";
import WayToRent from "./components/WayToRent";
import AuthStepsProvider from "../Auth/context/AuthStepsProvider";
import Authenticate from "../Auth";

const LandingPage = () => {
	return (
		<div>
			<AuthStepsProvider>
				<Header />
				<InfoSection />
				<ServiceApartment />
				<TopAgent />
				<WayToRent />
				<ContactUs />
				<Footer />
				<Authenticate />
			</AuthStepsProvider>
		</div>
	);
};

export default LandingPage;
