const token = process.env.NEXT_PUBLIC_AUTH_TOKEN;
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;

export const fetchFromGithub = async (query, variables) => {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'content-type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ query, variables }),
  })
    .then((r) => r.json())
    .catch((error) => console.error(error));

  if (response.errors) {
    const message = response.errors[0]?.message;
    throw new Error(message);
  }

  return response.data;
};
