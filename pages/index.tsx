import { Suspense, useState } from "react";

import { fetchQuery, graphql } from "react-relay";
import {
  useQuery,
  useRelayEnvironment,
  loadQuery,
  usePreloadedQuery,
} from "relay-hooks";
import { initEnvironment } from "libs/relay/relayEnvironment";
import { pages_index_search_Query } from "libs/relay/__generated__/pages_index_search_Query.graphql";

import Title from "components/common/Title";
import Layout from "components/common/Layout";
import SearchBar from "components/module/SearchBar";
import RepoTable from "components/module/RepoTable";
import RepoItem_Repository from "components/module/RepoItem";
import Spinner from "components/module/Spinner";
import RepoPageNav from "components/module/RepoPageNav";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [afterQuery, setAfterQuery] = useState<string | null>(null);
  const [beforeQuery, setBeforeQuery] = useState<string | null>(null);
  const [page, setPage] = useState<{
    first: number | null;
    last: number | null;
  }>({
    first: 5,
    last: null,
  });

  // const { data, error, isLoading } = useQuery<pages_index_search_Query>(query, {
  //   first: page.first,
  //   last: page.last,
  //   query: searchQuery,
  //   type: "REPOSITORY",
  //   after: afterQuery,
  //   before: beforeQuery,
  // });

  const environment = useRelayEnvironment();

  const prefetch = loadQuery();
  prefetch.next(
    environment,
    query,
    {
      first: page.first,
      last: page.last,
      query: searchQuery,
      type: "REPOSITORY",
      after: afterQuery,
      before: beforeQuery,
    },
    { fetchPolicy: "store-or-network" }
  );

  const prefetchData = usePreloadedQuery<pages_index_search_Query>(prefetch);
  const { data, error, isLoading } = prefetchData;

  const pageNavSetterProps = {
    setAfterQuery,
    setBeforeQuery,
    setPage,
  };

  return (
    <div className="w-screen p-12">
      <Layout>
        <Title text="Github Search" />
        <Title subTitle text="built with Relay & Next.js" />
        <Title author text="by tekwoo lee" />
        <SearchBar setState={setSearchQuery} />
        <RepoTable>
          {isLoading && <Spinner />}
          {error && <p>Error...😫</p>}
          <Suspense fallback={<Spinner />}>
            {data && data.search.repositoryCount !== 0 && (
              <p className="mb-6 text-center text-lg font-semibold">
                Total Result : {data.search.repositoryCount}
              </p>
            )}
            {data && (
              <RepoPageNav
                pageInfo={data.search.pageInfo}
                {...pageNavSetterProps}
              />
            )}
            {data?.search.edges?.length !== 0
              ? data?.search.edges?.map(
                  (edge, i) =>
                    edge && (
                      <RepoItem_Repository key={`result_${i}`} edge={edge} />
                    )
                )
              : searchQuery && <p>No result.. 😓</p>}
            {data && (
              <RepoPageNav
                pageInfo={data.search.pageInfo}
                {...pageNavSetterProps}
              />
            )}
          </Suspense>
        </RepoTable>
      </Layout>
    </div>
  );
}

const query = graphql`
  query pages_index_search_Query(
    $query: String!
    $first: Int
    $last: Int
    $type: SearchType!
    $after: String
    $before: String
  ) {
    search(
      query: $query
      first: $first
      last: $last
      type: $type
      after: $after
      before: $before
    ) {
      repositoryCount
      pageInfo {
        ...RepoPageNav_PageInfo
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
