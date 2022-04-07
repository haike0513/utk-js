
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('@polkadot/dev/config/jest.cjs');

module.exports = {
  ...config,
  moduleNameMapper: {
    '@utk/sdk-(core|router)(.*)$': '<rootDir>/packages/sdk-$1/src/$2'
  },
  testTimeout: 30000
};
