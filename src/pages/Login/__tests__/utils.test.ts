import { getGithubAccessToken } from '../utils';

describe('getGithubAccessToken', () => {
  test('returns the access token', async () => {
    const accessTokenMock = '1234567890';
    const resMock = {
      data: {
        access_token: accessTokenMock,
      },
    };
    global.fetch = jest.fn().mockImplementationOnce(
      () => new Promise((resolve) => {
        resolve({
          json: () => new Promise((jsonResolve) => {
            jsonResolve(resMock);
          }),
        });
      }),
    );
    const res = await getGithubAccessToken('code');
    expect(res).toEqual(accessTokenMock);
  });
});
