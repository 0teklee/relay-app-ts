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
  const [afterQuery, setAfterQuery] = useState<string | null>(null);
  const [beforeQuery, setBeforeQuery] = useState<string | null>(null);
  const { data, error, isLoading } = useQuery<pages_index_search_Query>(query, {
    first: 5,
    query: searchQuery,
    type: "REPOSITORY",
    after: afterQuery,
    before: beforeQuery,
  });

  console.log("부모컴포넌트 data", data);
  return (
    <div className="w-screen h-full p-12 bg-red-600">
      <Layout>
        <Title text="Github Search" />
        <Title subTitle text="built with Relay & Next.js" />
        <SearchBar setState={setSearchQuery} />
        <RepoTable>
          {isLoading && <p>Loading..</p>}
          {data?.search?.pageInfo?.hasPreviousPage && (
            <button
              onClick={() => {
                setBeforeQuery(data?.search?.pageInfo?.startCursor);
              }}
            >
              preevious
            </button>
          )}
          {data?.search?.pageInfo?.hasNextPage && (
            <button
              onClick={() => {
                setAfterQuery(data?.search?.pageInfo?.endCursor);
              }}
            >
              next
            </button>
          )}
          {data?.search?.edges?.length !== 0 ? (
            data?.search?.edges?.map((edge, i) => (
              <RepoItem_Repository key={`result_${i}`} edge={edge} />
            ))
          ) : (
            <p>No result.. 😓</p>
          )}
        </RepoTable>
      </Layout>
    </div>
  );
}

const query = graphql`
  query pages_index_search_Query(
    $first: Int
    $query: String!
    $type: SearchType!
    $after: String
    $before: String
  ) {
    search(
      first: $first
      query: $query
      type: $type
      after: $after
      before: $before
    ) {
      pageInfo {
        startCursor
        hasNextPage
        hasPreviousPage
        endCursor
      }
      edges {
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
