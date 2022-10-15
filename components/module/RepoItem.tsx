import { graphql, useFragment } from "react-relay/hooks";
import type { RepoItem_Repository$key } from "libs/relay/__generated__/RepoItem_Repository.graphql";

const fragment = graphql`
  fragment RepoItem_Repository on SearchResultItem {
    ... on Repository {
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
`;

interface IProps {
  node: RepoItem_Repository$key;
}

const RepoItem_Repository = ({ node }: IProps) => {
  const data = useFragment(fragment, node);
  const { name, createdAt, description = "", stargazers, watchers } = data;
  const LocaleDate = new Date(createdAt).toLocaleString("ko-KR", {
    dateStyle: "medium",
  });
  console.log("innerItem", data);
  return <div className="mb-8 p-5 border-b border-gray-300"></div>;
};

export default RepoItem_Repository;
