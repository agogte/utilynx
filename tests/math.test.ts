import '../src/math'

describe('Number.prototype.sqrt', () => {
  it('returns correct square root', () => {
    expect((9).sqrt()).toBe(3);
    expect((0).sqrt()).toBe(0);
  });
});

describe('Number.prototype.round', () => {
  it('rounds to nearest integer by default', () => {
    expect((2.5).round()).toBe(3);
    expect((-2.5).round()).toBe(-2);
  });
  it('rounds to given precision', () => {
    expect((2.3456).round(2)).toBe(2.35);
    expect((2.344).round(2)).toBe(2.34);
  });
});

describe('Number.prototype.isEven', () => {
  it('returns true for even numbers', () => {
    expect((2).isEven()).toBe(true);
    expect((0).isEven()).toBe(true);
  });
  it('returns false for odd numbers', () => {
    expect((3).isEven()).toBe(false);
  });
});

describe('Number.prototype.isOdd', () => {
  it('returns true for odd numbers', () => {
    expect((3).isOdd()).toBe(true);
  });
  it('returns false for even numbers', () => {
    expect((4).isOdd()).toBe(false);
  });
});
