const fs = require("fs");
const {
  getIntrospectionQuery,
  buildClientSchema,
  printSchema,
} = require("graphql");
const fetch = require("isomorphic-fetch");
const path = require("path");

const generateSchema = async () => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  try {
    if (GITHUB_TOKEN) {
      const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${GITHUB_TOKEN}`,
        },
        body: JSON.stringify({
          query: getIntrospectionQuery(),
        }),
      });
      const res = await response.json();
      const sdl = printSchema(buildClientSchema(res.data));
      const parentPath = path.join(__dirname, "../");
      fs.writeFileSync(`${parentPath}/schema.graphql`, sdl);
    }
  } catch (e) {
    console.error(e);
  }
};

generateSchema();
