import "@/styles/globals.css";
import { CometProvider } from "@comet-labs/react";

const cometProviderConfig = {
  publishableKey: "oAEGrKqbF4GHUZBnE3EJtvw1VELcc2mT",
};

export default function App({ Component, pageProps }) {
  return (
    <CometProvider config={cometProviderConfig}>
      <Component {...pageProps} />
    </CometProvider>
  );
}
