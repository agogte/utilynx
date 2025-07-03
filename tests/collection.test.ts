import '../src/collection';

describe('firstOrDefault', () => {
  it('returns first element if no predicate', () => {
    expect(([1, 2, 3]).firstOrDefault()).toBe(1);
  });
  it('returns first matching element with predicate', () => {
    expect(([1, 2, 3].firstOrDefault(x => x > 1))).toBe(2);
  });
  it('returns undefined for empty array', () => {
    expect([].firstOrDefault()).toBeUndefined();
  });
});

describe('groupBy', () => {
  it('groups objects by key', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 1 }];
    const grouped = arr.groupBy(x => x.a);
    expect(grouped[1]).toEqual([{ a: 1 }, { a: 1 }]);
    expect(grouped[2]).toEqual([{ a: 2 }]);
  });
});

describe('sum', () => {
  it('returns sum of array', () => {
    expect([1, 2, 3].sum()).toBe(6);
  });
  it('returns undefined for empty array', () => {
    expect([].sum()).toBeUndefined();
  });
});

describe('average', () => {
  it('returns average of array', () => {
    expect([2, 4, 6].average()).toBe(4);
  });
  it('returns undefined for empty array', () => {
    expect([].average()).toBeUndefined();
  });
});