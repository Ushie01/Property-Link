import getConfig from "next/config";

const getEnv = (name: string, defaultValue?: string): string => {
	const { publicRuntimeConfig, serverRuntimeConfig } = getConfig() ?? {};
	return (
		serverRuntimeConfig?.[name] ??
		publicRuntimeConfig?.[name] ??
		process.env[name] ??
		defaultValue
	);
};

export default getEnv;
