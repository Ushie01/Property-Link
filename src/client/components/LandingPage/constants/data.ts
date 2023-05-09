import chat from "./assets/chat.svg";
import vector from "./assets/Vector.svg";
import crown from "./assets/crown.svg";
import Rectangle7 from "./assets/Rectangle7.png";
import Rectangle8 from "./assets/Rectangle8.png";
import Rectangle9 from "./assets/Rectangle9.png";

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
		image: chat,
		value: "Communication",
		text: "We are the single point of contact in sync with what you truly desire. We speak your language",
	},
	{
		image: vector,
		value: "Reliability",
		text: "We Keep our Promises and provide real time feedback and timeline that ensures that your wishes are our command",
	},
	{
		image: crown,
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
