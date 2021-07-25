import formatNumberWithCommas from '../formatNumberWithCommas';

describe('formatNumberWithCommas', () => {
  test('adds the comma every 3 digits', () => {
    expect(formatNumberWithCommas(9)).toBe('9');
    expect(formatNumberWithCommas(99)).toBe('99');
    expect(formatNumberWithCommas(999)).toBe('999');
    expect(formatNumberWithCommas(9999)).toBe('9,999');
    expect(formatNumberWithCommas(99999)).toBe('99,999');
    expect(formatNumberWithCommas(999999)).toBe('999,999');
    expect(formatNumberWithCommas(9999999)).toBe('9,999,999');
    expect(formatNumberWithCommas(99999999)).toBe('99,999,999');
    expect(formatNumberWithCommas(999999999)).toBe('999,999,999');
    expect(formatNumberWithCommas(9999999999)).toBe('9,999,999,999');
  });
});
