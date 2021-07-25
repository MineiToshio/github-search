export type User = {
  photo: string,
  name: string,
};

export type Repository = {
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
