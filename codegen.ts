import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "./src/schema/public/schema.graphql",
	documents: "./src/**/*.graphql",
	generates: {
		"src/gql/": {
			preset: "near-operation-file",
			presetConfig: {
				extension: "generated.ts",
				baseTypesPath: "./graphql",
			},
			plugins: ["typescript-operations", "typescript-react-apollo"],
			config: {
				withHooks: true,
				withHOC: false,
				withComponent: false,
				dedupeOperationSuffix: false,
				preResolveTypes: true,
				addDocBlocks: false,
			},
		},
		"./graphql.schema.json": {
			plugins: ["introspection"],
		},
	},
};

export default config;
