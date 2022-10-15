/**
 * @generated SignedSource<<2774a0f83e3aa5492fdb227b6227a466>>
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
    readonly databaseId?: number | null;
    readonly description?: string | null;
    readonly name?: string;
    readonly stargazers?: {
      readonly totalCount: number;
    };
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

const node: ReaderFragment = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  }
];
return {
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
              "name": "databaseId",
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
              "concreteType": "UserConnection",
              "kind": "LinkedField",
              "name": "watchers",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "StargazerConnection",
              "kind": "LinkedField",
              "name": "stargazers",
              "plural": false,
              "selections": (v0/*: any*/),
              "storageKey": null
            }
          ],
          "type": "Repository",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResultItemEdge",
  "abstractKey": null
};
})();

(node as any).hash = "0e4ea4245865c09e69daeaffcbf71490";

export default node;
