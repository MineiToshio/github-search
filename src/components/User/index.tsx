import React from 'react';
import { Text, Spacer } from '../../core';
import ResultBox from '../ResultBox';
import { Link, TitleContainer } from './styles';
import type { UserResult } from '../../types';

type Props = Omit<UserResult, 'id'>;

const User = ({
  bio,
  login,
  name,
  url,
}: Props) => (
  <ResultBox padding="20px 20px 23px 20px">
    <TitleContainer>
      <Link href={url} target="_blank" rel="noreferrer">
        <Text as="h3" color="black" lineHeight="21px" fontSize="lg" fontWeight="bold">{name}</Text>
      </Link>
      <Spacer direction="horizontal" size={10} />
      {/* The designs didn't specified what text should be here so I'm just showing the username */}
      <Text color="text1" fontSize="md" lineHeight="18px">{`@${login}`}</Text>
    </TitleContainer>
    <Spacer direction="vertical" size={5} />
    {/* The designs didn't specified what text should be here so I'm just showing the bio */}
    <Text color="text1" fontSize="sm" lineHeight="16px" as="p" ellipsis>{bio}</Text>
  </ResultBox>
);

export default User;
