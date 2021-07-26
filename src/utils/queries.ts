import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetUser {
    viewer {
      name
      avatarUrl
    }
  }
`;

export const SEARCH_REPOSITORIES = gql`
  query SearchRepositories($queryString: String!, $afterPageCursor: String) {
    search(type: REPOSITORY, query: $queryString, first: 10, after: $afterPageCursor) {
      repositoryCount
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      repos: edges {
        repo: node {
          ... on Repository {
            id
            url
            description
            name
            stargazers {
              totalCount
            }
            updatedAt
            licenseInfo {
              name
            }
            languages(orderBy: {field: SIZE, direction: DESC}, first: 1) {
              edges {
                node {
                  name
                }
              }
            }
            owner {
              ... on Organization {
                login
              }
              ... on User {
                login
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_USERS = gql`
  query SearchUsers($queryString: String!, $afterPageCursor: String) {
    search(type: USER, query: $queryString, first: 10, after: $afterPageCursor) {
      pageInfo {
        hasNextPage
        hasPreviousPage
        endCursor
        startCursor
      }
      repos: edges {
        repo: node {
          ... on User {
            id
            name
            url
            bio
            login
          }
        }
      }
      userCount
    }
  }
`;
