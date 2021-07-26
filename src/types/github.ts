export type UserData = {
  viewer: {
    avatarUrl: string,
    name: string,
  }
};

type PageInfo = {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export type RepositoriesResultData = {
  search: {
    repositoryCount: number;
    pageInfo: PageInfo;
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

export type UsersResultData = {
  search: {
    userCount: number;
    pageInfo: PageInfo;
    repos: Array<{
      repo: {
        id: string;
        bio?: string;
        login: string;
        name?: string;
        url: string;
      };
    }>;
  }
};
