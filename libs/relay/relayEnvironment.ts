import { useMemo } from "react";

import { Environment, Network, RecordSource, Store } from "relay-runtime";
import type { FetchFunction } from "relay-runtime";

import fetchGQL from "libs/relay/fetchGQL";

let relayEnvironment: Environment;

const fetchRelay: FetchFunction = async (params, variables) => {
  return fetchGQL(params.text, variables);
};

const createEnvironment = () => {
  return new Environment({
    network: Network.create(fetchRelay),
    store: new Store(new RecordSource()),
  });
};

export type InitialRecords = ConstructorParameters<typeof RecordSource>[number];
export const initEnvironment = (initialRecords?: InitialRecords) => {
  const environment = relayEnvironment ?? createEnvironment();

  if (initialRecords) {
    environment.getStore().publish(new RecordSource(initialRecords));
  }

  if (typeof window === "undefined") return environment;

  if (!relayEnvironment) {
    relayEnvironment = environment;
  }

  return relayEnvironment;
};

export const useEnvironment = (initialRecords: InitialRecords) => {
  const relayEnvironment = useMemo(
    () => initEnvironment(initialRecords),
    [initialRecords]
  );
  return relayEnvironment;
};
