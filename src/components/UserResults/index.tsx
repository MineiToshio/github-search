import React, { Fragment } from 'react';
import { Spacer } from '../../core';
import formatNumberWithCommas from '../../utils/formatNumberWithCommas';
import User from '../User';
import ResultsLayout from '../ResultsLayout';
import type { UserResult } from '../../types';

type Props = {
  userCount: number;
  users: UserResult[];
}

const UserResults = ({ userCount, users }: Props) => (
  <ResultsLayout title={`${formatNumberWithCommas(userCount)} user${userCount !== 1 ? 's' : ''}`}>
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
