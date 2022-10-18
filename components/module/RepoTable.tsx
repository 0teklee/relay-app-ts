import { pages_index_search_Query } from "libs/relay/__generated__/pages_index_search_Query.graphql";
import { ReactNode, useState } from "react";
import {
  GraphQLTaggedNode,
  PreloadedQuery,
  usePreloadedQuery,
} from "react-relay";

import RepoItem_Repository from "components/module/RepoItem";
import RepoPageNav from "components/module/RepoPageNav";

const RepoTable = ({
  query,
  queryReference,
}: {
  query: GraphQLTaggedNode;
  queryReference: PreloadedQuery<pages_index_search_Query>;
}) => {
  const [afterQuery, setAfterQuery] = useState<string | null>(null);
  const [beforeQuery, setBeforeQuery] = useState<string | null>(null);
  const [page, setPage] = useState<{
    first: number | null;
    last: number | null;
  }>({
    first: 5,
    last: null,
  });

  const pageNavSetterProps = {
    setAfterQuery,
    setBeforeQuery,
    setPage,
  };

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
      {data && <RepoPageNav pageInfo={data.search.pageInfo} query={} />}
      {data?.search.edges?.length !== 0
        ? data?.search.edges?.map(
            (edge, i) =>
              edge && <RepoItem_Repository key={`result_${i}`} edge={edge} />
          )
        : searchQuery && <p>No result.. 😓</p>}
      {data && (
        <RepoPageNav pageInfo={data.search.pageInfo} {...pageNavSetterProps} />
      )}
    </div>
  );
};

export default RepoTable;
