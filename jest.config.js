const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.json');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: '/src/test/.+test.tsx?$',
  collectCoverageFrom: ['./src/main/**/**.{ts,tsx}'],
  coverageReporters: [
    'lcov',
    'json-summary',
    ['text', {file: 'coverage.txt', path: './'}],
  ],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
