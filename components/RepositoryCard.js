import React from 'react';

const RepositoryCard = ({ repository }) => {
  return (
    <div>
      <h1>{repository.nameWithOwner}</h1>
      <p>{`Stars: ${repository.stargazerCount}`}</p>
      <p>{repository.description}</p>
      <p>
        <small>
          <a href={repository.url}>{repository.url}</a>
        </small>
      </p>
    </div>
  );
};

export default RepositoryCard;
