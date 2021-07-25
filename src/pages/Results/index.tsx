import React, { useState, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spacer } from '../../core';
import { Header, RepositoryResults } from '../../components';
import { Container } from './styles';
import { SEARCH_REPOSITORIES } from '../../utils/queries';
import type { RepositoryData } from '../../types/github';

const Results = () => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get('q');
  const [searchValue, setSearchValue] = useState(searchQuery ?? '');

  const { data: repositoriesResult } = useQuery<RepositoryData>(SEARCH_REPOSITORIES, {
    variables: { queryString: searchQuery },
  });

  const onSearch = () => {
    const params = new URLSearchParams({ q: searchValue });
    history.replace({ pathname: location.pathname, search: params.toString() });
  };

  const repositories = useMemo(() => (repositoriesResult?.search.repos.map((r) => ({
    id: r.repo.id,
    description: r.repo.description,
    language: r.repo.languages.edges[0] ? r.repo.languages.edges[0].node.name : 'No Language',
    license: r.repo.licenseInfo?.name ?? 'No License',
    name: r.repo.name,
    owner: r.repo.owner.login,
    url: r.repo.url,
    stars: r.repo.stargazers.totalCount,
    updatedAt: r.repo.updatedAt,
  })) ?? []), [repositoriesResult]);

  return (
    <>
      <Header searchValue={searchValue} onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Container>
        <Spacer direction="vertical" size={30} />
        {repositoriesResult && (
          <RepositoryResults
            repositoryCount={repositoriesResult.search.repositoryCount}
            repositories={repositories}
          />
        )}
      </Container>
    </>
  );
};

export default Results;
