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

describe('lastOrDefault', () => {
  it('returns last element with no predicate', () => {
    expect([1, 2, 3].lastOrDefault()).toBe(3);
  });
  it('returns last matching element with predicate', () => {
    expect([1, 2, 3, 4].lastOrDefault(x => x % 2 === 0)).toBe(4);
  });
  it('returns undefined for empty array', () => {
    expect([].lastOrDefault()).toBeUndefined();
  });
  it('returns undefined when no match', () => {
    expect([1, 3, 5].lastOrDefault(x => x % 2 === 0)).toBeUndefined();
  });
});

describe('distinct', () => {
  it('removes duplicates from primitives', () => {
    expect([1, 1, 2, 3, 2].distinct()).toEqual([1, 2, 3]);
  });
  it('deduplicates by key selector', () => {
    const arr = [{ id: 1, v: 'a' }, { id: 2, v: 'b' }, { id: 1, v: 'c' }];
    expect(arr.distinct(x => x.id)).toEqual([{ id: 1, v: 'a' }, { id: 2, v: 'b' }]);
  });
  it('returns empty for empty array', () => {
    expect([].distinct()).toEqual([]);
  });
});

describe('orderBy', () => {
  it('sorts ascending by key', () => {
    expect([3, 1, 2].orderBy(x => x)).toEqual([1, 2, 3]);
  });
  it('sorts objects by key selector', () => {
    const arr = [{ n: 3 }, { n: 1 }, { n: 2 }];
    expect(arr.orderBy(x => x.n)).toEqual([{ n: 1 }, { n: 2 }, { n: 3 }]);
  });
  it('does not mutate original array', () => {
    const arr = [3, 1, 2];
    arr.orderBy(x => x);
    expect(arr).toEqual([3, 1, 2]);
  });
});

describe('orderByDesc', () => {
  it('sorts descending by key', () => {
    expect([1, 3, 2].orderByDesc(x => x)).toEqual([3, 2, 1]);
  });
});

describe('chunk', () => {
  it('splits array into chunks of given size', () => {
    expect([1, 2, 3, 4, 5].chunk(2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it('returns empty for size <= 0', () => {
    expect([1, 2, 3].chunk(0)).toEqual([]);
  });
  it('returns single chunk when size >= length', () => {
    expect([1, 2, 3].chunk(5)).toEqual([[1, 2, 3]]);
  });
});

describe('take', () => {
  it('returns first N elements', () => {
    expect([1, 2, 3, 4, 5].take(3)).toEqual([1, 2, 3]);
  });
  it('returns all if count > length', () => {
    expect([1, 2].take(10)).toEqual([1, 2]);
  });
});

describe('skip', () => {
  it('skips first N elements', () => {
    expect([1, 2, 3, 4, 5].skip(2)).toEqual([3, 4, 5]);
  });
  it('returns empty if count >= length', () => {
    expect([1, 2].skip(5)).toEqual([]);
  });
});

describe('flatten', () => {
  it('deep-flattens nested arrays', () => {
    expect([[1, [2, [3]]]], ).toBeTruthy();
    expect([[1, [2, [3]]]].flatten()).toEqual([1, 2, 3]);
  });
  it('handles already flat array', () => {
    expect([1, 2, 3].flatten()).toEqual([1, 2, 3]);
  });
});

describe('intersect', () => {
  it('returns elements in both arrays', () => {
    expect([1, 2, 3, 4].intersect([2, 4, 6])).toEqual([2, 4]);
  });
  it('returns empty if no common elements', () => {
    expect([1, 2].intersect([3, 4])).toEqual([]);
  });
});

describe('except', () => {
  it('returns elements not in other array', () => {
    expect([1, 2, 3, 4].except([2, 4])).toEqual([1, 3]);
  });
  it('returns original if no overlap', () => {
    expect([1, 2].except([3, 4])).toEqual([1, 2]);
  });
});

describe('zip', () => {
  it('pairs elements from two arrays', () => {
    expect([1, 2, 3].zip(['a', 'b', 'c'])).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
  });
  it('uses transform when provided', () => {
    expect([1, 2, 3].zip([10, 20, 30], (a, b) => a + (b as number))).toEqual([11, 22, 33]);
  });
  it('truncates to shorter array', () => {
    expect([1, 2, 3].zip([4, 5])).toEqual([[1, 4], [2, 5]]);
  });
});

describe('partition', () => {
  it('splits into matching and non-matching', () => {
    const [evens, odds] = [1, 2, 3, 4, 5].partition(x => x % 2 === 0);
    expect(evens).toEqual([2, 4]);
    expect(odds).toEqual([1, 3, 5]);
  });
  it('handles all matching', () => {
    const [match, rest] = [2, 4, 6].partition(x => x % 2 === 0);
    expect(match).toEqual([2, 4, 6]);
    expect(rest).toEqual([]);
  });
});

describe('countBy', () => {
  it('counts occurrences by key', () => {
    const result = ['a', 'b', 'a', 'c', 'b', 'a'].countBy(x => x);
    expect(result['a']).toBe(3);
    expect(result['b']).toBe(2);
    expect(result['c']).toBe(1);
  });
});

describe('min', () => {
  it('returns minimum value', () => {
    expect([3, 1, 4, 1, 5].min()).toBe(1);
  });
  it('returns undefined for empty array', () => {
    expect([].min()).toBeUndefined();
  });
});

describe('max', () => {
  it('returns maximum value', () => {
    expect([3, 1, 4, 1, 5].max()).toBe(5);
  });
  it('returns undefined for empty array', () => {
    expect([].max()).toBeUndefined();
  });
});

describe('median', () => {
  it('returns median of odd-length array', () => {
    expect([1, 2, 3, 4, 5].median()).toBe(3);
  });
  it('returns average of two middle values for even-length', () => {
    expect([1, 2, 3, 4].median()).toBe(2.5);
  });
  it('returns undefined for empty array', () => {
    expect([].median()).toBeUndefined();
  });
});
