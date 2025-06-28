import { firstOrDefault, groupBy, sum, average } from '../src/collection';

describe('firstOrDefault', () => {
  it('returns first element if no predicate', () => {
    expect(firstOrDefault([1, 2, 3])).toBe(1);
  });
  it('returns first matching element with predicate', () => {
    expect(firstOrDefault([1, 2, 3], x => x > 1)).toBe(2);
  });
  it('returns undefined for empty array', () => {
    expect(firstOrDefault([])).toBeUndefined();
  });
});

describe('groupBy', () => {
  it('groups objects by key', () => {
    const arr = [{ a: 1 }, { a: 2 }, { a: 1 }];
    const grouped = groupBy(arr, x => x.a);
    expect(grouped[1]).toEqual([{ a: 1 }, { a: 1 }]);
    expect(grouped[2]).toEqual([{ a: 2 }]);
  });
});

describe('sum', () => {
  it('returns sum of array', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
  it('returns undefined for empty array', () => {
    expect(sum([])).toBeUndefined();
  });
});

describe('average', () => {
  it('returns average of array', () => {
    expect(average([2, 4, 6])).toBe(4);
  });
  it('returns undefined for empty array', () => {
    expect(average([])).toBeUndefined();
  });
});