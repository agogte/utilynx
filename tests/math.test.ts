import { sqrt, round, isEven, isOdd } from '../src/math';

describe('sqrt', () => {
  it('returns correct square root', () => {
    expect(sqrt(9)).toBe(3);
    expect(sqrt(0)).toBe(0);
  });
});

describe('round', () => {
  it('rounds to nearest integer by default', () => {
    expect(round(2.5)).toBe(3);
    expect(round(-2.5)).toBe(-2);
  });
  it('rounds to given precision', () => {
    expect(round(2.3456, 2)).toBe(2.35);
    expect(round(2.344, 2)).toBe(2.34);
  });
});

describe('isEven', () => {
  it('returns true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
  });
  it('returns false for odd numbers', () => {
    expect(isEven(3)).toBe(false);
  });
});

describe('isOdd', () => {
  it('returns true for odd numbers', () => {
    expect(isOdd(3)).toBe(true);
  });
  it('returns false for even numbers', () => {
    expect(isOdd(4)).toBe(false);
  });
});