import {
  pages_index_search_Query,
  pages_index_search_Query$variables,
} from "libs/relay/__generated__/pages_index_search_Query.graphql";
import {
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
  UseQueryLoaderLoadQueryOptions,
} from "react-relay";

import RepoItem_Repository from "components/module/RepoItem";
import RepoPageNav from "components/module/RepoPageNav";

const RepoTable = ({
  query,
  queryReference,
  loadQuery,
}: {
  query: GraphQLTaggedNode;
  queryReference: PreloadedQuery<pages_index_search_Query>;
  loadQuery: (
    variables: pages_index_search_Query$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => void;
}) => {
  const data = usePreloadedQuery<pages_index_search_Query>(
    query,
    queryReference
  );

  return (
    <div className="relative w-full h-full max-w-3xl p-8 rounded-2xl border border-gray-300 bg-white">
      {data && data.search.repositoryCount !== 0 && (
        <p className="mb-6 text-center text-lg font-semibold">
          Total Result : {data.search.repositoryCount}
        </p>
      )}
      {data && (
        <RepoPageNav
          pageInfo={data.search.pageInfo}
          query={queryReference.variables.query}
          loadQuery={loadQuery}
        />
      )}
      {data?.search.edges?.length !== 0
        ? data?.search.edges?.map(
            (edge, i) =>
              edge && <RepoItem_Repository key={`result_${i}`} edge={edge} />
          )
        : queryReference.variables.query && <p>No result.. 😓</p>}
      {data && (
        <RepoPageNav
          pageInfo={data.search.pageInfo}
          query={queryReference.variables.query}
          loadQuery={loadQuery}
        />
      )}
    </div>
  );
};

export default RepoTable;
