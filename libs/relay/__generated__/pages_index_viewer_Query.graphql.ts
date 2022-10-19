/**
 * @generated SignedSource<<3ee5898d72a880612867e310752754e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type pages_index_viewer_Query$variables = {};
export type pages_index_viewer_Query$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"GithubIntro_Viewer">;
  };
};
export type pages_index_viewer_Query = {
  response: pages_index_viewer_Query$data;
  variables: pages_index_viewer_Query$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_index_viewer_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GithubIntro_Viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_index_viewer_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "login",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "avatarUrl",
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0b74effe845bc0431daf9096e2a1dec2",
    "id": null,
    "metadata": {},
    "name": "pages_index_viewer_Query",
    "operationKind": "query",
    "text": "query pages_index_viewer_Query {\n  viewer {\n    ...GithubIntro_Viewer\n    id\n  }\n}\n\nfragment GithubIntro_Viewer on User {\n  login\n  avatarUrl\n  name\n  url\n}\n"
  }
};

(node as any).hash = "33ea03f5bbca7832740768853749bed6";

export default node;
