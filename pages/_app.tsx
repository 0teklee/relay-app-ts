import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "relay-hooks";
import { InitialRecords, useEnvironment } from "libs/relay/relayEnvironment";
import "styles/global.css";

interface IAppProps extends AppProps {
  pageProps: {
    initialRecords: InitialRecords;
  };
}

function App({ Component, pageProps }: IAppProps) {
  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default App;
