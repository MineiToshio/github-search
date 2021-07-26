import { Buffer } from 'buffer/';
import constants from '../../utils/constants';

export const getAfterPageCursor = (pageNumber: number) => {
  if (pageNumber === 1) return null;
  const afterPageNumber = pageNumber * constants.resultsToShow - constants.resultsToShow;
  return Buffer.from(`cursor:${afterPageNumber}`).toString('base64');
};
