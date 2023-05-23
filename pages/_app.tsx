import type { AppProps } from "next/app";
import "./styles/globals.css";
import { ApolloProvider } from "@apollo/client";

import { useApollo } from "@/shared/apollo/useApollo";
export default function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);

	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
