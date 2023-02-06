import React from "react";

import { CometProvider, LoginButton } from "@comet-labs/react";

const cometProviderConfig = {
  publishableKey: "oAEGrKqbF4GHUZBnE3EJtvw1VELcc2mT",
};

const TestComet = () => {
  return (
    // <React.StrictMode>
    <CometProvider config={cometProviderConfig}>
      <LoginButton />
    </CometProvider>
    // </React.StrictMode>
  );
};

export default TestComet;
