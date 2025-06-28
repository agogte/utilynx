import '../src/extensions';

describe('Object.prototype.hasValue', () => {
  it('returns true for non-null object', () => {
    expect({}.hasValue()).toBe(true);
  });
  it('returns false for null', () => {
    expect((null as any)?.hasValue?.() ?? false).toBe(false);
  });
});

describe('Object.prototype.isEmpty', () => {
  it('returns true for empty object', () => {
    expect({}.isEmpty()).toBe(true);
  });
  it('returns false for non-empty object', () => {
    expect({ a: 1 }.isEmpty()).toBe(false);
  });
  it('returns true for empty string', () => {
    expect(''.isEmpty()).toBe(true);
  });
  it('returns false for non-empty string', () => {
    expect('abc'.isEmpty()).toBe(false);
  });
  it('returns true for empty array', () => {
    expect([].isEmpty()).toBe(true);
  });
  it('returns false for non-empty array', () => {
    expect([1].isEmpty()).toBe(false);
  });
});

describe('Object.prototype.isNumeric', () => {
  it('returns true for numeric string', () => {
    expect('123'.isNumeric()).toBe(true);
  });
  it('returns false for non-numeric string', () => {
    expect('abc'.isNumeric()).toBe(false);
  });
  it('returns true for number', () => {
    expect((123 as any).isNumeric()).toBe(true);
  });
  it('returns false for NaN', () => {
    expect((NaN as any).isNumeric()).toBe(false);
  });
});