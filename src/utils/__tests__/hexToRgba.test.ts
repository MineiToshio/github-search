import hexToRgba from '../hexToRgba';

describe('hexToRgba', () => {
  test('converts a 6 digit hex color to rgba with no opacity', () => {
    expect(hexToRgba('#0235de')).toBe('rgba(2,53,222,1)');
  });
  test('converts a 6 digit hex color to rgba', () => {
    expect(hexToRgba('#0235de', 0.5)).toBe('rgba(2,53,222,0.5)');
  });
  test('converts a 3 digit the hex color to rgba', () => {
    expect(hexToRgba('#cac', 0.5)).toBe('rgba(204,170,204,0.5)');
  });
  test('throws an error when hex has a bad format', () => {
    expect(() => hexToRgba('this is not a hex color', 0.5)).toThrow('Bad hex format');
  });
});
