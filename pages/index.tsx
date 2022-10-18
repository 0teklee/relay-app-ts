import { Suspense, useEffect, useState } from "react";

import {
  fetchQuery,
  graphql,
  useQueryLoader,
  usePreloadedQuery,
} from "react-relay";
import { useQuery, useRelayEnvironment, loadQuery } from "relay-hooks";
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
  const [queryReference, loadQuery] =
    useQueryLoader<pages_index_search_Query>(query);

  return (
    <div className="w-screen p-12">
      <Layout>
        <Title text="Github Search" />
        <Title subTitle text="built with Relay & Next.js" />
        <Title author text="by tekwoo lee" />
        <SearchBar loadQuery={loadQuery} />
        <Suspense fallback={<Spinner />}>
          {queryReference && (
            <RepoTable
              query={query}
              queryReference={queryReference}
              loadQuery={loadQuery}
            />
          )}
        </Suspense>
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
        after: null,
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
