import { Config } from '@stencil/core';
import json from '@rollup/plugin-json'

export const config: Config = {
  namespace: 'generic-components',
  plugins: [json()],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
