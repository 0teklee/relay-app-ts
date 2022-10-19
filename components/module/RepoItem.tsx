import { graphql, useFragment, useMutation } from "relay-hooks";

import type { RepoItem_Repository$key } from "libs/relay/__generated__/RepoItem_Repository.graphql";

import { RepoItem_AddStar_Mutation } from "libs/relay/__generated__/RepoItem_AddStar_Mutation.graphql";
import { RepoItem_RemoveStar_Mutation } from "libs/relay/__generated__/RepoItem_RemoveStar_Mutation.graphql";

import Spinner from "./Spinner";

const fragment = graphql`
  fragment RepoItem_Repository on SearchResultItemEdge {
    cursor
    node {
      ... on SearchResultItem {
        ... on Repository {
          createdAt
          description
          name
          url
          watchers {
            totalCount
          }
        }
        ... on Starrable {
          id
          viewerHasStarred
          stargazerCount
          __typename
        }
      }
    }
  }
`;

const addStar = graphql`
  mutation RepoItem_AddStar_Mutation($input: AddStarInput!) @raw_response_type {
    addStar(input: $input) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

const removeStar = graphql`
  mutation RepoItem_RemoveStar_Mutation($input: RemoveStarInput!)
  @raw_response_type {
    removeStar(input: $input) {
      starrable {
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;

interface IProps {
  edge: RepoItem_Repository$key;
}

const RepoItem_Repository = ({ edge }: IProps) => {
  const { node } = useFragment(fragment, edge);

  const [commitAddStar] = useMutation<RepoItem_AddStar_Mutation>(addStar);
  const [commitRemoveStar] =
    useMutation<RepoItem_RemoveStar_Mutation>(removeStar);

  const LocaleDate = (createdAt: string) =>
    new Date(createdAt).toLocaleString("ko-KR", {
      dateStyle: "medium",
    });

  if (node) {
    const {
      id,
      stargazerCount,
      viewerHasStarred,
      createdAt,
      description,
      name,
      url,
      watchers,
      __typename,
    } = node;

    return (
      <div className="mb-8 p-5 border-b border-gray-300">
        <a
          className="text-2xl font-bold hover:text-blue-700"
          href={url}
          target="_"
        >
          {name}
        </a>
        <p className="mt-2 mb-1 text-sm">{LocaleDate(createdAt)}</p>
        <div className="flex justify-between w-48 mb-4">
          <p className="mr-4 text-sm">views 👀: {watchers?.totalCount}</p>
          <p className="text-sm">stars ⭐: {stargazerCount}</p>
        </div>
        <p className="mb-6">{description}</p>
        {viewerHasStarred && (
          <button
            className="p-3 bg-white rounded-lg border-2 border-red-400 text-xs font-bold text-red-400 hover:bg-white hover:text-white hover:bg-red-400"
            onClick={() => {
              if (id && stargazerCount && __typename && viewerHasStarred) {
                return commitRemoveStar({
                  variables: {
                    input: {
                      starrableId: id,
                    },
                  },
                  optimisticResponse: {
                    removeStar: {
                      starrable: {
                        id,
                        stargazerCount,
                        viewerHasStarred,
                        __typename,
                      },
                    },
                  },
                });
              }
            }}
          >
            Cancel ☆
          </button>
        )}
        {!viewerHasStarred && (
          <button
            className="p-3 bg-white rounded-lg border-2 border-blue-400 text-xs font-bold text-blue-400 hover:text-white hover:bg-blue-400"
            onClick={() => {
              if (
                id &&
                stargazerCount &&
                __typename &&
                viewerHasStarred === false
              ) {
                return commitAddStar({
                  variables: {
                    input: {
                      starrableId: id,
                    },
                  },
                  optimisticResponse: {
                    addStar: {
                      starrable: {
                        id,
                        stargazerCount,
                        __typename,
                        viewerHasStarred: viewerHasStarred,
                      },
                    },
                  },
                });
              }
            }}
          >
            Add ⭐
          </button>
        )}
      </div>
    );
  } else {
    /* if prop(node) is undefined */
    return <Spinner />;
  }
};

export default RepoItem_Repository;
