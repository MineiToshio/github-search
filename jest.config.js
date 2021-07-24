module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',
  transform: { '^.+\\.(ts|tsx)?$': 'ts-jest' },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)?$',
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/core/**/index.ts',
    '!src/components/**/index.ts',
    '!src/pages/**/index.ts',
    '!src/**/styles.ts',
    '!src/styles/*.ts',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
