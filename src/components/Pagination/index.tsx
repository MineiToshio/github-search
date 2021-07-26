import React, { useState, useEffect, Fragment } from 'react';
import { Spacer, Text } from '../../core';
import Arrow from '../Arrow';
import { Container, PageNumber } from './styles';
import constants from '../../utils/constants';
import { getPaginationRange } from './utils';

type Props = {
  onPageNumberClick: (pageNumber: number) => void;
  totalResultsNumber: number;
  currentPageNumber: number;
}

const PAGE_NEIGHBORS = 1;
const LEFT_DOTS = 'ldots';
const RIGHT_DOTS = 'rdots';
const MAX_PAGE_NUMBER = 100;

const Pagination = ({
  onPageNumberClick,
  totalResultsNumber,
  currentPageNumber,
} : Props) => {
  const [pageNumbers, setPageNumbers] = useState<Array<number | string>>();

  // Limiting the page number to 100 cause Github returns an empty array past 1000 results
  const totalPages = Math.min(
    MAX_PAGE_NUMBER,
    Math.ceil(totalResultsNumber / constants.resultsToShow),
  );

  useEffect(() => {
    const fetchPageNumbers = () => {
      const totalNumbers = (PAGE_NEIGHBORS * 2) + 3;
      const totalBlocks = totalNumbers + 2;

      if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPageNumber - PAGE_NEIGHBORS);
        const endPage = Math.min(totalPages - 1, currentPageNumber + PAGE_NEIGHBORS);

        let pages: Array<number | string> = getPaginationRange(startPage, endPage);

        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);

        switch (true) {
          // handle: (1) ... {5 6} [7] {8 9} (10)
          case (hasLeftSpill && !hasRightSpill): {
            const extraPages = getPaginationRange(startPage - spillOffset, startPage - 1);
            pages = [LEFT_DOTS, ...extraPages, ...pages];
            break;
          }

          // handle: (1) {2 3} [4] {5 6} ... (10)
          case (!hasLeftSpill && hasRightSpill): {
            const extraPages = getPaginationRange(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, RIGHT_DOTS];
            break;
          }

          // handle: (1) ... {4 5} [6] {7 8} ... (10)
          case (hasLeftSpill && hasRightSpill):
          default: {
            pages = [LEFT_DOTS, ...pages, RIGHT_DOTS];
            break;
          }
        }

        return [1, ...pages, totalPages];
      }

      return getPaginationRange(1, totalPages);
    };

    setPageNumbers(fetchPageNumbers());
  }, [currentPageNumber]);

  const onPreviousClick = () => {
    if (currentPageNumber !== 1) {
      onPageNumberClick(currentPageNumber - 1);
    }
  };

  const onNextClick = () => {
    if (currentPageNumber !== totalPages) {
      onPageNumberClick(currentPageNumber + 1);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={onPreviousClick} disabled={currentPageNumber === 1} />
      <Spacer direction="horizontal" size={19} />
      {pageNumbers && pageNumbers.map((page, i) => (
        <Fragment key={page}>
          {(page === LEFT_DOTS || page === RIGHT_DOTS)
            ? (
              <Text color="text4" lineHeight="29px" fontSize="lg" fontFamily="pagination" fontWeight="medium">...</Text>
            ) : (
              <PageNumber type="button" onClick={() => onPageNumberClick(+page)} selected={currentPageNumber === +page}>
                <Text color={currentPageNumber === +page ? 'black' : 'text4'} lineHeight="29px" fontSize="lg" fontFamily="pagination" fontWeight="medium">{page}</Text>
              </PageNumber>
            )}
          {pageNumbers.length !== i + 1 && <Spacer direction="horizontal" size={17} />}
        </Fragment>
      ))}
      <Spacer direction="horizontal" size={19} />
      <Arrow direction="right" onClick={onNextClick} disabled={currentPageNumber === totalPages} />
    </Container>
  );
};

export default Pagination;
