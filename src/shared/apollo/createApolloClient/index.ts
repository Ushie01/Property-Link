import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { getCookie } from "cookies-next";
import getEnv from "../../utils/getEnv";

const createApolloClient = () => {
	const token = getCookie("token");
	return new ApolloClient({
		ssrMode: typeof window === "undefined",
		link: createHttpLink({
			uri: "https://property-listing-production.up.railway.app/graphql",
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		}),
		cache: new InMemoryCache(),
	});
};
export default createApolloClient;
