import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import ContactUs from "./components/ContactUs";


const LandingPage = () => {
	return (
		<div>
			<Header />
			<InfoSection />
			<hr />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default LandingPage;
