import InfoSectionConnect from "./InfoSectionContainer/components/InfoSectionConnect";
import InfoSectionProperties from "./InfoSectionContainer/components/InfoSectionProperties";

const InfoSection = () => {
	return (
		<div className='bg-white p-24'>
			<InfoSectionConnect />
			<InfoSectionProperties />
		</div>
	);
};

export default InfoSection;
