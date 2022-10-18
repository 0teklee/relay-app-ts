import { Dispatch, SetStateAction } from "react";

import { graphql, useFragment } from "relay-hooks";
import { RepoPageNav_PageInfo$key } from "libs/relay/__generated__/RepoPageNav_PageInfo.graphql";

const pageFragment = graphql`
  fragment RepoPageNav_PageInfo on PageInfo {
    startCursor
    hasNextPage
    hasPreviousPage
    endCursor
  }
`;

interface IProps {
  pageInfo: RepoPageNav_PageInfo$key;
  loadQuery: (
    variables: pages_index_search_Query$variables,
    options?: UseQueryLoaderLoadQueryOptions | undefined
  ) => void;
}

const RepoPageNav = ({ pageInfo, loadQuery }: IProps) => {
  const { startCursor, endCursor, hasPreviousPage, hasNextPage } =
    useFragment<RepoPageNav_PageInfo$key>(pageFragment, pageInfo);

  const handlePrev = () => {
    setAfterQuery(null);
    setPage({ first: null, last: 5 });
    setBeforeQuery(startCursor);
  };

  const handleNext = loadQuery({
    after: 5,
    before: null,
  });

  return (
    <div className="flex justify-center mb-6 ">
      {hasPreviousPage && (
        <button className="mr-12 hover:text-blue-700" onClick={handlePrev}>
          {`< prev`}
        </button>
      )}
      {hasNextPage && (
        <button className="hover:text-blue-700" onClick={handleNext}>
          {`next >`}
        </button>
      )}
    </div>
  );
};

export default RepoPageNav;
