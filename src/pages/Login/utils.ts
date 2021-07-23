import constants from '../../utils/constants';

export const getGithubAccessToken = async (code: string): Promise<string> => {
  const res = await fetch(constants.apiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
    }),
  });
  const { data: { access_token: accessToken } } = await res.json();
  return accessToken;
};
