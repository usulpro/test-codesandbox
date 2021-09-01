import React from 'react';
import Head from 'next/head';

import { fetchRepository } from '../../../model/repositories';
import RepositoryCard from '../../../components/RepositoryCard';

export async function getServerSideProps({ params }) {
  const { owner, name } = params;
  const repository = await fetchRepository(owner, name);
  return { props: { owner, name, repository } };
}

export default function Repository({ repository }) {
  return (
    <div>
      <Head>
        <title>{repository.name}</title>
        <meta name="description" content={repository.description} />
      </Head>
      <RepositoryCard repository={repository} />
    </div>
  );
}
