import React from 'react';
import { Text, Spacer } from '../../core';
import { Container } from './styles';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';
import Repository from '../Repository';
import type { Repository as RepositoryType } from '../../types';

type Props = {
  repositoryCount: number;
  repositories: RepositoryType[];
}

const RepositoryResults = ({ repositoryCount, repositories }: Props) => (
  <Container>
    <Text color="black" fontSize="xl" lineHeight="30px" fontWeight="bold" as="h2">
      {`${formatNumberWithCommas(repositoryCount)} repository result${repositoryCount !== 1 ? 's' : ''}`}
    </Text>
    <Spacer direction="vertical" size={25} />
    {repositories.map((r, i) => (
      <>
        <Repository
          key={r.id}
          description={r.description}
          language={r.language}
          license={r.license}
          name={r.name}
          owner={r.owner}
          url={r.url}
          stars={r.stars}
          updatedAt={r.updatedAt}
        />
        {repositories.length !== i + 1 && (
          <Spacer direction="vertical" size={20} />
        )}
      </>
    ))}
  </Container>
);

export default RepositoryResults;
