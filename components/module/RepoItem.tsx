import { graphql, useFragment, usePaginationFragment } from "relay-hooks";
import type { RepoItem_Repository$key } from "libs/relay/__generated__/RepoItem_Repository.graphql";

// RepoItem Fragment & index before relay compile
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
  const { node, cursor } = useFragment(fragment, edge);
  const { name, createdAt, description = "", stargazers, watchers } = node;
  const LocaleDate = new Date(createdAt).toLocaleString("ko-KR", {
    dateStyle: "medium",
  });
  console.log("child frag cursor", cursor);
  return (
    <div className="mb-8 p-5 border-b border-gray-300">
      <h3 className="mb-4 text-2xl font-bold">{name}</h3>
      <p className="mb-1 text-sm">{LocaleDate}</p>
      <p className="mb-4 text-sm">views : {watchers?.totalCount}</p>
      <p className="mb-4">{description}</p>
    </div>
  );
};

export default RepoItem_Repository;
