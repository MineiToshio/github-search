import { getAfterPageCursor } from '../utils';

describe('getAfterPageCursor', () => {
  test('returns the after page cursor', () => {
    expect(getAfterPageCursor(11)).toBe('Y3Vyc29yOjEwMA==');
  });
  test('returns null is page number is 1', () => {
    expect(getAfterPageCursor(1)).toBeNull();
  });
});
