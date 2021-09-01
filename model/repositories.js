import { fetchFromGithub } from './graphql-client';

export const fetchRepository = async (owner, name) => {
  const resp = await fetchFromGithub(
    `#graphql
    query Repository($name: String!, $owner: String!) {
      repository(name: $name, owner: $owner) {
        url
        stargazerCount
        description
        name
        nameWithOwner
      }
    }
  `,
    {
      owner,
      name,
    },
  );

  return resp.repository;
};
