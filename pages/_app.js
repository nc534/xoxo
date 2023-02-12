import "@/styles/globals.css";
import { CometProvider} from "@comet-labs/react";

const cometProviderConfig = {
  publishableKey: "pR1T5f7vQMtZEm7ZNgBPBFFRGsLp1Nki",
};

export default function App({ Component, pageProps }) {
  return (
    <CometProvider config={cometProviderConfig}>
      <Component {...pageProps} />
    </CometProvider>
  );
}
