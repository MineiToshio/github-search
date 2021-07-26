import React, { useState, useMemo } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Spacer } from '../../core';
import { Header, SearchResults } from '../../components';
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
  const [currentRepositoryEndCursor, setCurrentRepositoryEndCursor] = useState<string | null>(null);
  const [currentRepositoryNumber, setCurrentRepositoryNumber] = useState(1);
  const [currentUserEndCursor, setCurrentUserEndCursor] = useState<string | null>(null);
  const [currentUserNumber, setCurrentUserNumber] = useState(1);

  const { data: repositoriesResult } = useQuery<RepositoriesResultData>(SEARCH_REPOSITORIES, {
    variables: { queryString: searchQuery, afterPageCursor: currentRepositoryEndCursor },
  });

  const { data: usersResult } = useQuery<UsersResultData>(SEARCH_USERS, {
    variables: { queryString: searchQuery, afterPageCursor: currentUserEndCursor },
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

  const users = useMemo(() => (usersResult?.search.repos.map((user) => ({
    id: user.repo.id,
    bio: user.repo.bio || 'No bio provided',
    login: user.repo.login,
    name: user.repo.name || 'Unnamed User',
    url: user.repo.url,
  })) ?? []), [usersResult]);

  const onRepositoryNextClick = () => {
    if (repositoriesResult?.search.pageInfo.hasNextPage) {
      setCurrentRepositoryEndCursor(repositoriesResult.search.pageInfo.endCursor);
      setCurrentRepositoryNumber(currentRepositoryNumber + 1);
    }
  };

  const onRepositoryPreviousClick = () => {
    if (repositoriesResult?.search.pageInfo.hasPreviousPage) {
      const pageNumberToGo = currentRepositoryNumber - 1;
      setCurrentRepositoryEndCursor(getAfterPageCursor(pageNumberToGo));
      setCurrentRepositoryNumber(pageNumberToGo);
    }
  };

  const onUserNextClick = () => {
    if (usersResult?.search.pageInfo.hasNextPage) {
      setCurrentUserEndCursor(usersResult.search.pageInfo.endCursor);
      setCurrentUserNumber(currentUserNumber + 1);
    }
  };

  const onUserPreviousClick = () => {
    if (usersResult?.search.pageInfo.hasPreviousPage) {
      const pageNumberToGo = currentUserNumber - 1;
      setCurrentUserEndCursor(getAfterPageCursor(pageNumberToGo));
      setCurrentUserNumber(pageNumberToGo);
    }
  };

  return (
    <>
      <Header searchValue={searchValue} onSearchValueChange={setSearchValue} onSearch={onSearch} />
      <Container>
        <Spacer direction="vertical" size={30} />
        {repositoriesResult && usersResult && (
          <SearchResults
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectecCategory}
            repositoryCount={repositoriesResult.search.repositoryCount}
            repositories={repositories}
            userCount={usersResult?.search.userCount}
            users={users}
            onRepositoryNextClick={onRepositoryNextClick}
            onRepositoryPreviousClick={onRepositoryPreviousClick}
            isRepositoryNextDisabled={!repositoriesResult.search.pageInfo.hasNextPage}
            isRepositoryPreviousDisabled={!repositoriesResult.search.pageInfo.hasPreviousPage}
            onUserNextClick={onUserNextClick}
            onUserPreviousClick={onUserPreviousClick}
            isUserNextDisabled={!usersResult.search.pageInfo.hasNextPage}
            isUserPreviousDisabled={!usersResult.search.pageInfo.hasPreviousPage}
          />
        )}
      </Container>
    </>
  );
};

export default Results;
