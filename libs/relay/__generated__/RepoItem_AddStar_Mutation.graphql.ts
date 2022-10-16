/**
 * @generated SignedSource<<dca8c533c63920aad195fe9176b8f9c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddStarInput = {
  clientMutationId?: string | null;
  starrableId: string;
};
export type RepoItem_AddStar_Mutation$variables = {
  input: AddStarInput;
};
export type RepoItem_AddStar_Mutation$data = {
  readonly addStar: {
    readonly starrable: {
      readonly id: string;
      readonly stargazerCount: number;
    } | null;
  } | null;
};
export type RepoItem_AddStar_Mutation = {
  response: RepoItem_AddStar_Mutation$data;
  variables: RepoItem_AddStar_Mutation$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
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
    "name": "RepoItem_AddStar_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "RepoItem_AddStar_Mutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "AddStarPayload",
        "kind": "LinkedField",
        "name": "addStar",
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
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6d845d51ab2ec02a4cf211eac5361917",
    "id": null,
    "metadata": {},
    "name": "RepoItem_AddStar_Mutation",
    "operationKind": "mutation",
    "text": "mutation RepoItem_AddStar_Mutation(\n  $input: AddStarInput!\n) {\n  addStar(input: $input) {\n    starrable {\n      __typename\n      id\n      stargazerCount\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "84ab4dfa5ffbd6421c97f7c66381e3fe";

export default node;
