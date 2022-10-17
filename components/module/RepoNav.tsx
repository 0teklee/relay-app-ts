import { usePagination, graphql } from "relay-hooks";
const fragment = graphql`
  fragment RepoNav_PageInfo on SearchResultItemConnection {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
  }
`;

const RepoNav = () => {
  return (
    <div className="flex justify-center mb-6 ">
      {
        <button className="mr-12 hover:text-blue-700" onClick={() => {}}>
          {`< prev`}
        </button>
      }
      {
        <button className="hover:text-blue-700" onClick={() => {}}>
          {`next >`}
        </button>
      }
    </div>
  );
};

export default RepoNav;
