/**
 * @generated SignedSource<<7c2dd118712c9de75157cb7b2d029578>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoItem_Repository$data = {
  readonly createdAt?: any;
  readonly description?: string | null;
  readonly name?: string;
  readonly stargazers?: {
    readonly totalCount: number;
  };
  readonly watchers?: {
    readonly totalCount: number;
  };
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
      "kind": "InlineFragment",
      "selections": [
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
  "type": "SearchResultItem",
  "abstractKey": "__isSearchResultItem"
};
})();

(node as any).hash = "62718ef482b4a88753640649e67fdea4";

export default node;
