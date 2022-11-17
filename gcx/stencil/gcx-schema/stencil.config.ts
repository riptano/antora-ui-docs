import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "gcx-schema",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "dist-custom-elements",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      empty: true,
      //buildDir:"/Users/eilovares/Documents/Antora/antora-ui-docs/src/js/vendor/gcx-schema",
      serviceWorker: null, // disable service workers
    },
  ],
};
