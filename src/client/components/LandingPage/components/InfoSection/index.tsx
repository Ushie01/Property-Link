import InfoSectionConnect from "./InfoSectionContainer/components/InfoSectionConnect";
import InfoSectionProperties from "./InfoSectionContainer/components/InfoSectionProperties";

const InfoSection = () => {
	return (
		<div className='hidden lg: bg-white p-16'>
			<InfoSectionConnect />
			<InfoSectionProperties />
		</div>
	);
};

export default InfoSection;
