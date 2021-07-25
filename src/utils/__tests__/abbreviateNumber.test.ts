import abbreviateNumber from '../abbreviateNumber';

describe('abbreviateNumber', () => {
  test('returns the same number when lower than 1000', () => {
    expect(abbreviateNumber(1)).toBe('1');
    expect(abbreviateNumber(11)).toBe('11');
    expect(abbreviateNumber(111)).toBe('111');
  });
  test('returns the number using the k formatter', () => {
    expect(abbreviateNumber(1000)).toBe('1k');
    expect(abbreviateNumber(10000)).toBe('10k');
    expect(abbreviateNumber(100000)).toBe('100k');
    expect(abbreviateNumber(999900)).toBe('999.9k');
  });
  test('returns the number using the M formatter', () => {
    expect(abbreviateNumber(1000000)).toBe('1M');
    expect(abbreviateNumber(10000000)).toBe('10M');
    expect(abbreviateNumber(100000000)).toBe('100M');
    expect(abbreviateNumber(999900000)).toBe('999.9M');
    expect(abbreviateNumber(1234567890)).toBe('1234.6M');
  });
  test('returns 0 with small numbers', () => {
    expect(abbreviateNumber(0)).toBe('0');
    expect(abbreviateNumber(0.1)).toBe('0');
  });
});
