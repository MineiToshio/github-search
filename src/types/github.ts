export type UserData = {
  viewer: {
    avatarUrl: string,
    name: string,
  }
};

export type RepositoryData = {
  search: {
    repositoryCount: number;
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      startCursor: string;
    }
    repos: Array<{
      repo: {
        id: string;
        description: string;
        languages: {
          edges: Array<{
            node: {
              name: string;
            }
          }>;
        };
        licenseInfo?: {
          name: string;
        };
        name: string;
        owner: {
          login: string;
        };
        stargazers: {
          totalCount: number;
        };
        updatedAt: Date;
        url: string;
      }
    }>;
  }
};
