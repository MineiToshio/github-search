import constants from '../constants';

describe('constants', () => {
  test('constants should have a defined value', () => {
    expect(constants.apiAuthUrl).toBeDefined();
    expect(constants.apiAuthUrl).toBeDefined();
    expect(constants.githubGraphQl).toBeDefined();
    expect(constants.resultsToShow).toBeDefined();
    expect(constants.localStorageKeys.accessToken).toBeDefined();
  });
});
