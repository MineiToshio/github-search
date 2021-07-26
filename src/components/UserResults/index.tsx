import React, { Fragment } from 'react';
import { Spacer } from '../../core';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';
import User from '../User';
import ResultsLayout from '../ResultsLayout';
import type { UserResult } from '../../types';

type Props = {
  userCount: number;
  users: UserResult[];
  onNextClick: () => void;
  onPreviousClick: () => void;
  onPageNumberClick: (pageNumber: number) => void;
  isNextDisabled: boolean;
  isPreviousDisabled: boolean;
  currentPageNumber: number;
}

const UserResults = ({
  userCount,
  users,
  onNextClick,
  onPreviousClick,
  onPageNumberClick,
  isNextDisabled,
  isPreviousDisabled,
  currentPageNumber,
}: Props) => (
  <ResultsLayout
    title={`${formatNumberWithCommas(userCount)} user${userCount !== 1 ? 's' : ''}`}
    onNextClick={onNextClick}
    onPreviousClick={onPreviousClick}
    onPageNumberClick={onPageNumberClick}
    isNextDisabled={isNextDisabled}
    isPreviousDisabled={isPreviousDisabled}
    totalResultsNumber={userCount}
    currentPageNumber={currentPageNumber}
  >
    {users.map((r, i) => (
      <Fragment key={r.id}>
        <User
          bio={r.bio}
          login={r.login}
          name={r.name}
          url={r.url}
        />
        {users.length !== i + 1 && (
          <Spacer direction="vertical" size={20} />
        )}
      </Fragment>
    ))}
  </ResultsLayout>
);

export default UserResults;
