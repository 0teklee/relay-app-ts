import fetch from "isomorphic-fetch";
import type { Variables } from "relay-runtime";

const fetchGQL = async (query: string | null, variables: Variables) => {
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  if (GITHUB_TOKEN) {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    return await response.json();
  }
};

export default fetchGQL;
