require("dotenv").config();
const generateSchema = require("./generateSchema");

generateSchema(process.env.NEXT_PUBLIC_GRAPHQL_URL, "src/schema/public");
