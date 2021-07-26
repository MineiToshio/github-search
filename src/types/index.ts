export type User = {
  photo: string,
  name: string,
};

export type RepositoryResult = {
  id: string;
  owner: string;
  name: string;
  url: string;
  description: string;
  stars: number;
  language: string;
  license: string;
  updatedAt: Date;
};

export type UserResult = {
  id: string;
  bio: string;
  login: string;
  name: string;
  url: string;
};

export type SearchCategory = 'Repositories' | 'Users';
