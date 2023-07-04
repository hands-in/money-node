import typescript from '@rollup/plugin-typescript';
import jsonPlugin from '@rollup/plugin-json';
import external from 'rollup-plugin-peer-deps-external';
import dtsPlugin from 'rollup-plugin-dts';
import licensePlugin from 'rollup-plugin-license';
import path from 'path';
import pkg from './package.json' assert {type: 'json'};
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputFile = 'src/main/index.ts';

const commonBanner = licensePlugin({
  banner: {
    content: {
      file: path.join(__dirname, 'resources', 'license_banner.txt'),
    },
  },
});

const commonInput = {
  input: inputFile,
  plugins: [
    jsonPlugin(),
    typescript({tsconfig: './tsconfig.build.json'}),
    external(),
    commonBanner,
  ],
};

const commonOutput = {
  exports: 'named',
};

export default [
  // NPM bundles. They have all the dependencies excluded for end code size optimization.
  {
    ...commonInput,
    external: Object.keys(pkg.dependencies ?? {}),
    output: [
      // CJS for usage with `require()`
      {
        ...commonOutput,
        file: pkg.main,
        format: 'cjs',
      },

      // ESM for usage with `import`
      {
        ...commonOutput,
        file: pkg.module,
        format: 'es',
      },
    ],
  },

  // TypeScript definition
  {
    ...commonInput,
    plugins: [dtsPlugin(), commonBanner],
    output: {
      file: pkg.types,
      format: 'es',
    },
  },
];
