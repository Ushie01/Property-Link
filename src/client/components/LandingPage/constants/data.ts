import {
	DevicesPhone, 
	MailEnvelope,
	OtherFlame,
	OtherCrown,
	ChatChat
} from '@heathmont/moon-icons-tw';
import Rectangle7 from "../components/InfoSection/InfoSectionContainer/constant/assets/Rectangle7.png";
import Rectangle8 from "../components/InfoSection/InfoSectionContainer/constant/assets/Rectangle8.png";
import Rectangle9 from "../components/InfoSection/InfoSectionContainer/constant/assets/Rectangle9.png";
import RectangleA from "../components/ServiceApartment/ServiceApartmentContainer/contants/assets/RectangleA.png";
import RectangleB from "../components/ServiceApartment/ServiceApartmentContainer/contants/assets/RectangleB.png";
import RectangleC from "../components/ServiceApartment/ServiceApartmentContainer/contants/assets/RectangleC.png";
import Rectangle14 from "../components/TopAgents/TopAgentsContainer/constants/assets/Rectangle14.png";
import Rectangle15 from "../components/TopAgents/TopAgentsContainer/constants/assets/Rectangle15.png";
import Rectangle16 from "../components/TopAgents/TopAgentsContainer/constants/assets/Rectangle16.png";


export const RATING_DATA = [
	{
		value: "9K+",
		text: "Happy Client",
	},
	{
		value: "13K+",
		text: "Awards",
	},
	{
		value: "26K+",
		text: "Listed Properties",
	},
];

export const HEADER_NAVBAR_DATA = [
	"Agent",
	"Properties",
	"Services",
	"Contact Us",
];

export const SERACH_FILTER_TEXT = [
	{
		title: "Location",
		labelText: "Select Location",
		options: ["New York", "Los Angeles", "Chicago", "Houston"],
	},
	{
		title: "Property Type",
		labelText: "Select Property Type",
		options: ["Apartment", "House", "Villa"],
	},
	{
		title: "Price range",
		labelText: "Select Price Range",
		options: ["0 - 1000", "1000 - 2000", "2000 - 3000"],
	},
];

export const CONNECT_CLIENT_COMMENT = [
	{
		image: ChatChat,
		value: "Communication",
		text: "We are the single point of contact in sync with what you truly desire. We speak your language",
	},
	{
		image: OtherFlame,
		value: "Reliability",
		text: "We Keep our Promises and provide real time feedback and timeline that ensures that your wishes are our command",
	},
	{
		image: OtherCrown,
		value: "Quality Assurance",
		text: "Quality first, We vet all housing units with supported bodies to make sure we deliver a 100% guarantee on houses on our platform",
	},
];

export const CLIENT_PROPERTY = [
	{
		image: Rectangle7,
		text: "Semi Detached Apartments",
	},
	{
		image: Rectangle8,
		text: "2/3 Bedroom Apartments",
	},
	{
		image: Rectangle9,
		text: "Fully Serviced Automated Apartments",
	},
];

export const CONTACT_US_DATA = [
	{
		image: DevicesPhone,
		text: 'Call',
		phone: '+2348125023151'
	},
	{
		image: ChatChat,
		text: 'Chat',
		phone: '+2348125023151'
	},
	{
		image: DevicesPhone,
		text: 'Email',
		phone: '+2348125023151'
	},
	{
		image: MailEnvelope,
		text: 'Message',
		phone: '+2348125023151'
	},
];


export const SERVICE_APARTMENT_DATA = [
	{
		image: RectangleA,
		type: 'Service Apartment',
		location: '146, Bourdillion Road, Banana Island ikoyi Lagos ',
		amount: '₦6,000,000.00',
		bedroom: '5',
		bathroom: '4',
		swimpool: '3'
	},
	{
		image: RectangleB,
		type: 'Service Apartment',
		location: '146, Bourdillion Road, Banana Island ikoyi Lagos',
		amount: '₦6,000,000.00',
		bedroom: '5',
		bathroom: '4',
		swimpool: '3'
	},
	{
		image: RectangleC,
		type: 'Service Apartment',
		location: '146, Bourdillion Road, Banana Island ikoyi Lagos',
		amount: '₦6,000,000.00',
		bedroom: '5',
		bathroom: '4',
		swimpool: '3'
	}
];

export const TOP_AGENTS = [
	{
		image: Rectangle14,
		name: 'AdeWunmi Bankole',
		comment: 'Graduate of Unilag, Business adminsistration, Real estate Expert'
	},
	{
		image: Rectangle15,
		name: 'Joyce Richardson',
		comment: 'Masters in Finance at Harvard. Realtor.'
	},
	{
		image: Rectangle16,
		name: 'Dennis Phillips',
		comment: 'Experienced Surveyor with 6+ years experience drafting housing plans.'
	}
];

