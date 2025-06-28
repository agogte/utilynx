import '../src/string';

describe('String.prototype.isNullOrEmpty', () => {
  it('returns true for empty string', () => {
    expect(''.isNullOrEmpty()).toBe(true);
  });
  it('returns false for non-empty string', () => {
    expect('abc'.isNullOrEmpty()).toBe(false);
  });
});

describe('String.prototype.padLeft', () => {
  it('pads string on the left', () => {
    expect('abc'.padLeft(5, '0')).toBe('00abc');
  });
  it('returns original if already long enough', () => {
    expect('abc'.padLeft(2, '0')).toBe('abc');
  });
});

describe('String.prototype.padRight', () => {
  it('pads string on the right', () => {
    expect('abc'.padRight(5, '0')).toBe('abc00');
  });
  it('returns original if already long enough', () => {
    expect('abc'.padRight(2, '0')).toBe('abc');
  });
});