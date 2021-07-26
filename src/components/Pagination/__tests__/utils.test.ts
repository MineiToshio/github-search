import { getPaginationRange } from '../utils';

describe('getPaginationRange', () => {
  test('returns consecutive numbers from 1 to 5', () => {
    expect(getPaginationRange(1, 5)).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
