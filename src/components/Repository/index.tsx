import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { Text, Spacer } from '../../core';
import ResultBox from '../ResultBox';
import { Link } from './styles';
import abbreviateNumber from '../../utils/abbreviateNumber';
import type { RepositoryResult } from '../../types';

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo('en-US');

type Props = Omit<RepositoryResult, 'id'>;

const Repository = ({
  description,
  language,
  license,
  name,
  owner,
  stars,
  updatedAt,
  url,
}: Props) => (
  <ResultBox padding="20px">
    <Link href={url} target="_blank" rel="noreferrer">
      <Text as="h3" color="black" lineHeight="21px" fontSize="lg" fontWeight="bold">{`${owner}/${name}`}</Text>
    </Link>
    <Spacer direction="vertical" size={5} />
    {/* As the designs didn't specified anything, I'm formatting the description to one line
        to maintain the same height for all results. If the idea was to show the whole description
        just remove the `description` prop. */}
    <Text as="p" color="text1" lineHeight="18px" fontSize="md" ellipsis>{description}</Text>
    <Spacer direction="vertical" size={15} />
    <Text as="p" color="text1" lineHeight="16px" fontSize="sm">
      {`${abbreviateNumber(stars)} Stars | ${language} | ${license} | Updated ${timeAgo.format(new Date(updatedAt))}`}
    </Text>
  </ResultBox>
);

export default Repository;
