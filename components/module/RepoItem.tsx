import { graphql, useFragment, useMutation } from "relay-hooks";
import type { RepoItem_Repository$key } from "libs/relay/__generated__/RepoItem_Repository.graphql";
import { useState } from "react";

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
        }
      }
    }
  }
`;

const addStar = graphql`
  mutation RepoItem_AddStar_Mutation($input: AddStarInput!) {
    addStar(input: $input) {
      starrable {
        id
        stargazerCount
      }
    }
  }
`;

const removeStar = graphql`
  mutation RepoItem_RemoveStar_Mutation($input: RemoveStarInput!) {
    removeStar(input: $input) {
      starrable {
        stargazerCount
      }
    }
  }
`;

interface IProps {
  edge: RepoItem_Repository$key;
}

const RepoItem_Repository = ({ edge }: IProps) => {
  const { node } = useFragment(fragment, edge);
  const LocaleDate = (createdAt: string) =>
    new Date(createdAt).toLocaleString("ko-KR", {
      dateStyle: "medium",
    });

  const [commitAddStar, isAddInFlight] = useMutation(addStar);
  const [commitRemoveStar, isRemoveInFlight] = useMutation(removeStar);

  const [isStarAdded, setIsStarAdded] = useState(node?.viewerHasStarred);
  const [starCount, setStarCount] = useState(node?.stargazerCount);
  return (
    <div className="mb-8 p-5 border-b border-gray-300">
      {node && (
        <>
          <a
            className="mb-4 text-2xl font-bold hover:text-blue-700"
            href={node.url}
            target="_"
          >
            {node.name}
          </a>
          <p className="mb-1 text-sm">{LocaleDate(node.createdAt)}</p>
          <div className="flex justify-between w-48 mb-4">
            <p className="mr-4 text-sm">
              views 👀: {node.watchers?.totalCount}
            </p>
            <p className="text-sm">stars ⭐: {starCount}</p>
          </div>
          <p className="mb-6">{node.description}</p>
          {isStarAdded && (
            <button
              className="p-3 bg-gray-400 rounded-lg border-2 border-gray-400 text-xs font-bold text-gray-700 hover:bg-white hover:text-red-400 hover:border-red-400"
              onClick={() =>
                commitRemoveStar({
                  variables: {
                    input: {
                      starrableId: node.id,
                    },
                  },
                  onCompleted(data: {
                    removeStar: { starrable: { stargazerCount: number } };
                  }) {
                    setIsStarAdded(false);
                    setStarCount(data.removeStar.starrable.stargazerCount);
                  },
                })
              }
            >
              Cancel ☆
            </button>
          )}
          {!isStarAdded && (
            <button
              className="p-3 bg-white rounded-lg border-2 border-white text-xs font-bold text-gray-700 hover:text-blue-400 hover:border-blue-400"
              onClick={() =>
                commitAddStar({
                  variables: {
                    input: {
                      starrableId: node.id,
                    },
                  },
                  onCompleted(data: {
                    addStar: { starrable: { stargazerCount: number } };
                  }) {
                    setIsStarAdded(true);
                    setStarCount(data.addStar.starrable.stargazerCount);
                  },
                })
              }
            >
              Add ⭐
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default RepoItem_Repository;
