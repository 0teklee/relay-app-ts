import { fetchQuery, graphql } from "react-relay";
import { initEnvironment } from "libs/relay/relayEnvironment";

import Title from "components/common/Title";
import Layout from "components/common/Layout";
import SearchBar from "components/module/SearchBar";

import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-screen h-full p-12 bg-red-600">
      {false ? (
        "Loading..."
      ) : (
        <>
          <Layout>
            <Title text="Github Search" />
            <Title subTitle text="built with Relay & Next.js" />
            <SearchBar setState={setSearchQuery} />
          </Layout>
        </>
      )}
    </div>
  );
}

const query = graphql`
  query pages_index_search_Query(
    $first: Int
    $query: String!
    $type: SearchType!
  ) {
    search(first: $first, query: $query, type: $type) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        ... on Repository {
          name
          createdAt
          description
          watchers {
            totalCount
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;

export const getStaticProps = async () => {
  const environment = initEnvironment();
  try {
    const initialRecords = environment.getStore().getSource().toJSON();

    return {
      props: {
        initialRecords,
      },
    };
  } catch (e) {
    console.error(e);
    throw e;
  }
};
