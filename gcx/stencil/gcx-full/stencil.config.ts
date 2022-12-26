import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "two-columns",
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
      buildDir:
        "/Users/eilovares/Documents/Antora/antora-ui-docs/src/js/vendor/two-columns",
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: "utils/enlighterjs.min.js",
          dest: "lib/enlighterjs.min.js",
        },
        {
          src: "utils/enlighterjs.min.css",
          dest: "lib/enlighterjs.min.css",
        },
      ],
    },
  ],
};
