import { graphql, useFragment, usePaginationFragment } from "relay-hooks";
import type { RepoItem_Repository$key } from "libs/relay/__generated__/RepoItem_Repository.graphql";

const fragment = graphql`
  fragment RepoItem_Repository on SearchResultItemEdge {
    cursor
    node {
      ... on SearchResultItem {
        ... on Repository {
          databaseId
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

interface IProps {
  edge: RepoItem_Repository$key;
}

const RepoItem_Repository = ({ edge }: IProps) => {
  const { node } = useFragment(fragment, edge);
  // const { name, createdAt, description = "", stargazers, watchers } = node;
  const LocaleDate = (createdAt: string) =>
    new Date(createdAt).toLocaleString("ko-KR", {
      dateStyle: "medium",
    });
  return (
    <div className="mb-8 p-5 border-b border-gray-300">
      {node && (
        <>
          <h3 className="mb-4 text-2xl font-bold">{node.name}</h3>
          <p className="mb-1 text-sm">{LocaleDate(node.createdAt)}</p>
          <div className="flex justify-between w-48 mb-4">
            <p className="mr-4 text-sm">
              views 👀: {node.watchers?.totalCount}
            </p>
            <p className="text-sm">stars ⭐: {node.watchers?.totalCount}</p>
          </div>
          <p className="mb-4">{node.description}</p>
        </>
      )}
    </div>
  );
};

export default RepoItem_Repository;
