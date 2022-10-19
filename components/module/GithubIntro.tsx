import { PreloadedQuery, useFragment, usePreloadedQuery } from "react-relay";
import { graphql, GraphQLTaggedNode } from "relay-runtime";
import { GithubIntro_Viewer$key } from "libs/relay/__generated__/GithubIntro_Viewer.graphql";

import Image from "next/image";
import { pages_index_viewer_Query } from "libs/relay/__generated__/pages_index_viewer_Query.graphql";

const viewerFragment = graphql`
  fragment GithubIntro_Viewer on User {
    login
    avatarUrl
    name
    url
  }
`;

interface IProps {
  query: GraphQLTaggedNode;
  queryReference: PreloadedQuery<pages_index_viewer_Query>;
}

const GithubIntro = ({ query, queryReference }: IProps) => {
  const data = usePreloadedQuery<pages_index_viewer_Query>(
    query,
    queryReference
  );

  const { avatarUrl, url, login, name } = useFragment<GithubIntro_Viewer$key>(
    viewerFragment,
    data.viewer
  );

  return (
    <div className="flex items-center mt-4 mb-6">
      <Image
        className="rounded-full "
        src={avatarUrl}
        width={60}
        height={60}
        alt="github_profile_img"
      />
      <a className="ml-8 underline hover:text-blue-700" href={url}>
        by {login}
      </a>
      <span className="ml-6">lee tekwoo({name})</span>
    </div>
  );
};

export default GithubIntro;
