import { useState } from "react";

import { fetchQuery, graphql } from "react-relay";
import { useQuery } from "relay-hooks";
import { initEnvironment } from "libs/relay/relayEnvironment";
import { pages_index_search_Query } from "libs/relay/__generated__/pages_index_search_Query.graphql";

import Title from "components/common/Title";
import Layout from "components/common/Layout";
import SearchBar from "components/module/SearchBar";
import RepoTable from "components/module/RepoTable";
import RepoItem_Repository from "components/module/RepoItem";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data, error, isLoading } = useQuery(query, {
    first: 5,
    query: searchQuery,
    type: "REPOSITORY",
  });

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
            <RepoTable>
              {data ? (
                data?.search?.nodes?.map((node) => (
                  <RepoItem_Repository key={node.id} node={node} />
                ))
              ) : (
                <p>No result.. 😓</p>
              )}
            </RepoTable>
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
        ...RepoItem_Repository
      }
    }
  }
`;

export const getStaticProps = async () => {
  const environment = initEnvironment();
  try {
    const queryProps = await fetchQuery<pages_index_search_Query>(
      environment,
      query,
      {
        first: 5,
        query: "",
        type: "REPOSITORY",
      }
    ).toPromise();
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
