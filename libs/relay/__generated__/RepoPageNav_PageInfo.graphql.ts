/**
 * @generated SignedSource<<b09bdf298aa21b8b4cde63f1305ff5ad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RepoPageNav_PageInfo$data = {
  readonly endCursor: string | null;
  readonly hasNextPage: boolean;
  readonly hasPreviousPage: boolean;
  readonly startCursor: string | null;
  readonly " $fragmentType": "RepoPageNav_PageInfo";
};
export type RepoPageNav_PageInfo$key = {
  readonly " $data"?: RepoPageNav_PageInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"RepoPageNav_PageInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RepoPageNav_PageInfo",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startCursor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasPreviousPage",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endCursor",
      "storageKey": null
    }
  ],
  "type": "PageInfo",
  "abstractKey": null
};

(node as any).hash = "7ac4ee90c677d651ad1e0dafdb4294dd";

export default node;
