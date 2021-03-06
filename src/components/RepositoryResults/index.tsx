import React, { Fragment } from 'react';
import { Spacer } from '../../core';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';
import Repository from '../Repository';
import ResultsLayout from '../ResultsLayout';
import type { RepositoryResult } from '../../types';

type Props = {
  repositoryCount: number;
  repositories: RepositoryResult[];
  onPageNumberClick: (pageNumber: number) => void;
  currentPageNumber: number;
}

const RepositoryResults = ({
  repositoryCount,
  repositories,
  onPageNumberClick,
  currentPageNumber,
}: Props) => (
  <ResultsLayout
    title={`${formatNumberWithCommas(repositoryCount)} repository result${repositoryCount !== 1 ? 's' : ''}`}
    onPageNumberClick={onPageNumberClick}
    totalResultsNumber={repositoryCount}
    currentPageNumber={currentPageNumber}
  >
    {repositories.map((r, i) => (
      <Fragment key={r.id}>
        <Repository
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
      </Fragment>
    ))}
  </ResultsLayout>
);

export default RepositoryResults;
