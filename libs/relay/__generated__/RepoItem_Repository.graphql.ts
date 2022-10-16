/**
 * @generated SignedSource<<ea2aac221facc3e1b2b6f8f896fc6372>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoItem_Repository$data = {
  readonly cursor: string;
  readonly node: {
    readonly createdAt?: any;
    readonly description?: string | null;
    readonly id?: string;
    readonly name?: string;
    readonly stargazerCount?: number;
    readonly url?: any;
    readonly viewerHasStarred?: boolean;
    readonly watchers?: {
      readonly totalCount: number;
    };
  } | null;
  readonly " $fragmentType": "RepoItem_Repository";
};
export type RepoItem_Repository$key = {
  readonly " $data"?: RepoItem_Repository$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoItem_Repository">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoItem_Repository",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "description",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "url",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "UserConnection",
              "kind": "LinkedField",
              "name": "watchers",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "totalCount",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "type": "Repository",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "id",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "viewerHasStarred",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "stargazerCount",
              "storageKey": null
            }
          ],
          "type": "Starrable",
          "abstractKey": "__isStarrable"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResultItemEdge",
  "abstractKey": null
};

(node as any).hash = "0f7f9a3c79d9f0c01c6a17cf05a3ba68";

export default node;
