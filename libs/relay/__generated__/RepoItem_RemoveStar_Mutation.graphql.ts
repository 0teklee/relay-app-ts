/**
 * @generated SignedSource<<953c6d06de1063918b99e5528ce83d4f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type RemoveStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepoItem_RemoveStar_Mutation$variables = {
  input: RemoveStarInput;
};
export type RepoItem_RemoveStar_Mutation$data = {
  readonly removeStar: {
    readonly starrable: {
      readonly stargazerCount: number;
    } | null;
  } | null;
};
export type RepoItem_RemoveStar_Mutation = {
  response: RepoItem_RemoveStar_Mutation$data;
  variables: RepoItem_RemoveStar_Mutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "stargazerCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RepoItem_RemoveStar_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RepoItem_RemoveStar_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "RemoveStarPayload",
        "kind": "LinkedField",
        "name": "removeStar",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "starrable",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ecbf7ad0ae2a598ccc362d025ae68d9e",
    "id": null,
    "metadata": {},
    "name": "RepoItem_RemoveStar_Mutation",
    "operationKind": "mutation",
    "text": "mutation RepoItem_RemoveStar_Mutation(\n  $input: RemoveStarInput!\n) {\n  removeStar(input: $input) {\n    starrable {\n      __typename\n      stargazerCount\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6da81cb01a9ca7a605bf1e64eb985c8a";

export default node;
