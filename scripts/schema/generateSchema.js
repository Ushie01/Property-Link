const fs = require('fs');
const request = require('request');
const { exec } = require('child_process');

const {
  buildClientSchema,
  getIntrospectionQuery,
  printSchema,
} = require('graphql/utilities');

module.exports = (endpoint, path) => {
  console.log('Generating GraphQL schema', { endpoint, path });
  const options = {
    uri: endpoint,
    agentOptions: {
      keepAlive: true,
      keepAliveMsecs: 15000,
    },
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: getIntrospectionQuery() }),
  };
  const requestPromise = new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });

  return requestPromise.then((schemaJSON) => {
    try {
      fs.mkdirSync(path, { recursive: true });
    } catch (error) {}
    fs.writeFileSync(
      `${path}/schema.json`,
      JSON.stringify(schemaJSON, null, 2),
    );
    const graphQLSchema = buildClientSchema(schemaJSON.data);
    fs.writeFileSync(
      `${path}/schema.graphql`,
      printSchema(graphQLSchema)
        .replaceAll('""""""', '')
        .replaceAll('\n  \n', ''),
    );
    const prettier = `prettier --ignore-path ./scripts/schema/.prettierignore --write ./${path}/schema.graphql`;
    console.log(prettier);
    exec(prettier);
  });
};
