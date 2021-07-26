import { GET_USER, SEARCH_REPOSITORIES, SEARCH_USERS } from '../queries';

describe('GET_USER', () => {
  test('GET_USER should have a defined value', () => {
    expect(GET_USER).toBeDefined();
  });
});

describe('SEARCH_REPOSITORIES', () => {
  test('SEARCH_REPOSITORIES should have a defined value', () => {
    expect(SEARCH_REPOSITORIES).toBeDefined();
  });
});

describe('SEARCH_USERS', () => {
  test('SEARCH_USERS should have a defined value', () => {
    expect(SEARCH_USERS).toBeDefined();
  });
});
