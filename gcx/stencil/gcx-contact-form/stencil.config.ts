import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  plugins: [
    sass({
      includePaths: [
        "./node_modules",
      ],
    }),
  ],
  namespace: "gcx-contact-form",
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
        "/Users/eilovares/Documents/Antora/antora-ui-docs/src/js/vendor/gcx-contact-form",
      serviceWorker: null, // disable service workers
    },
  ],
};
