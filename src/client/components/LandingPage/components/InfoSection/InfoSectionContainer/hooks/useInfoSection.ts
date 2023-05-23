import { useInfoSectionQueryQuery } from "../graphql/InfoSectionQuerygenerated";

const useInfoSection = () => {
	const { loading, data } = useInfoSectionQueryQuery();

	console.log(loading, data);
};

export default useInfoSection;
