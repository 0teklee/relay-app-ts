import { graphql, useFragment } from "react-relay/hooks";

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
  node: any;
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
