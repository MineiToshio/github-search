import constants from '../../utils/constants';

export const getGithubAccessToken = async (code: string) => {
  const res = await fetch(constants.apiAuthUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
    }),
  });
  return res;
};
