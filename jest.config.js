/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',       // tells Jest to use ts-jest for .ts files
  testEnvironment: 'node', // node environment
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], // optional: match test files
};
