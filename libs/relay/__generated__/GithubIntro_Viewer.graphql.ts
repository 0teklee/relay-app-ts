/**
 * @generated SignedSource<<f2f00d5365868d1e8e2cfca98da7ca34>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GithubIntro_Viewer$data = {
  readonly avatarUrl: any;
  readonly login: string;
  readonly name: string | null;
  readonly url: any;
  readonly " $fragmentType": "GithubIntro_Viewer";
};
export type GithubIntro_Viewer$key = {
  readonly " $data"?: GithubIntro_Viewer$data;
  readonly " $fragmentSpreads": FragmentRefs<"GithubIntro_Viewer">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GithubIntro_Viewer",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "4cc8964b68e916d2004333f458253ef2";

export default node;
