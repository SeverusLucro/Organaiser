module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover',
  ],
  moduleDirectories: [
    'node_modules/',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'node',
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  roots: [
    '<rootDir>/src',
  ],
  testLocationInResults: true,
  testMatch: [
    '**/?(*.)+(spec|test).[tj]s?(x)',
  ],
  transformIgnorePatterns: [
    'node_modules',
  ],
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
  verbose: true,
  watchPathIgnorePatterns: [
    '<rootDir>/node_modules/',
  ],
  globals: {
    DEBUG_LOG: true,
    BACKEND_WEBSOCKET: 'for test',
    ORIGIN_DOMAIN_WHITELIST: 'for test',
  },
  moduleNameMapper: {
    '^@root(.*)$': '<rootDir>/src$1',
  },
};
