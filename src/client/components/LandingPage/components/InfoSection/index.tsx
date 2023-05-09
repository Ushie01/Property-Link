import InfoSectionConnect from "./InfoSectionContainer/InfoSectionComponents/InfoSectionConnect";
import InfoSectionProperties from "./InfoSectionContainer/InfoSectionComponents/InfoSectionProperties";

const InfoSection = () => {
    return (
        <div className="bg-white p-24">
            <InfoSectionConnect />
            <InfoSectionProperties />
        </div>
    )
}

export default InfoSection;