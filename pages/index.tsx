import { Suspense, useEffect } from "react";

import { fetchQuery, graphql, useQueryLoader } from "react-relay";

import { pages_index_search_Query } from "libs/relay/__generated__/pages_index_search_Query.graphql";
import { pages_index_viewer_Query } from "libs/relay/__generated__/pages_index_viewer_Query.graphql";
import { initEnvironment } from "libs/relay/relayEnvironment";

import Layout from "components/common/Layout";
import Title from "components/common/Title";

import GithubIntro from "components/module/GithubIntro";
import RepoTable from "components/module/RepoTable";
import SearchBar from "components/module/SearchBar";
import Spinner from "components/module/Spinner";

export default function Home() {
  const [queryReference, loadQuery] =
    useQueryLoader<pages_index_search_Query>(query);

  const [viewerQueryReference, loadViewerQuery] =
    useQueryLoader<pages_index_viewer_Query>(viewer);

  useEffect(() => {
    loadViewerQuery({});
  }, [loadViewerQuery]);

  return (
    <div className="w-screen p-12">
      <Layout>
        <Title text="Github Search" />
        <Suspense fallback={<Spinner />}>
          {viewerQueryReference && (
            <GithubIntro query={viewer} queryReference={viewerQueryReference} />
          )}
        </Suspense>
        <Suspense fallback={<Spinner isTableSpinner />}>
          <SearchBar loadQuery={loadQuery} />
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

const viewer = graphql`
  query pages_index_viewer_Query {
    viewer {
      ...GithubIntro_Viewer
    }
  }
`;

export const getServerSideProps = async () => {
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
    ).subscribe;

    const viewerQuery = fetchQuery(environment, viewer, {}).subscribe;

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
