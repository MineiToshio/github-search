import React, { useState, useMemo, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spacer } from '../../core';
import { Header, SearchResults, Loading } from '../../components';
import { Container } from './styles';
import { SEARCH_REPOSITORIES, SEARCH_USERS } from '../../utils/queries';
import { getAfterPageCursor } from './utils';
import type { RepositoriesResultData, UsersResultData } from '../../types/github';
import type { SearchCategory } from '../../types';

const Results = () => {
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchQuery = query.get('q');
  const [searchValue, setSearchValue] = useState(searchQuery ?? '');
  const [selectedCategory, setSelectecCategory] = useState<SearchCategory>('Repositories');
  const [currentRepositoryNumber, setCurrentRepositoryNumber] = useState(1);
  const [currentUserNumber, setCurrentUserNumber] = useState(1);

  const currentRepositoryEndCursor = useMemo(() => (
    getAfterPageCursor(currentRepositoryNumber)
  ), [currentRepositoryNumber]);

  const currentUserEndCursor = useMemo(() => (
    getAfterPageCursor(currentUserNumber)
  ), [currentUserNumber]);

  const { data: repositoriesResult } = useQuery<RepositoriesResultData>(SEARCH_REPOSITORIES, {
    variables: { queryString: searchQuery, afterPageCursor: currentRepositoryEndCursor },
  });

  const { data: usersResult } = useQuery<UsersResultData>(SEARCH_USERS, {
    variables: { queryString: searchQuery, afterPageCursor: currentUserEndCursor },
  });

  useEffect(() => {
    setCurrentRepositoryNumber(1);
    setCurrentUserNumber(1);
  }, [searchQuery]);

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

  const users = useMemo(() => (usersResult?.search.repos.map((user) => ({
    id: user.repo.id,
    bio: user.repo.bio || 'No bio provided',
    login: user.repo.login,
    name: user.repo.name || 'Unnamed User',
    url: user.repo.url,
  })) ?? []), [usersResult]);

  return (
    <>
      <Header searchValue={searchValue} onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Container>
        {repositoriesResult && usersResult
          ? (
            <>
              <Spacer direction="vertical" size={30} />
              <SearchResults
                selectedCategory={selectedCategory}
                onCategoryClick={setSelectecCategory}
                repositoryCount={repositoriesResult.search.repositoryCount}
                repositories={repositories}
                userCount={usersResult?.search.userCount}
                users={users}
                onRepositoryPageNumberClick={setCurrentRepositoryNumber}
                currentRepositoryPageNumber={currentRepositoryNumber}
                onUserPageNumberClick={setCurrentUserNumber}
                currentUserPageNumber={currentUserNumber}
              />
            </>
          ) : (
            <Loading />
          )}
      </Container>
    </>
  );
};

export default Results;
