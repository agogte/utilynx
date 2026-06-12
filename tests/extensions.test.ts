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

describe('Object.prototype.deepClone', () => {
  it('creates a deep copy', () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = obj.deepClone();
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
    expect((clone as any).b).not.toBe(obj.b);
  });
  it('clones arrays', () => {
    const arr = [1, [2, 3]];
    const clone = arr.deepClone();
    expect(clone).toEqual(arr);
    expect(clone).not.toBe(arr);
  });
  it('clones Date objects', () => {
    const obj = { date: new Date(2024, 0, 1) };
    const clone = obj.deepClone() as typeof obj;
    expect(clone.date.getTime()).toBe(obj.date.getTime());
    expect(clone.date).not.toBe(obj.date);
  });
});

describe('Object.prototype.pick', () => {
  it('returns object with only specified keys', () => {
    const obj = { id: 1, name: 'Alice', password: 'secret' };
    expect(obj.pick('id', 'name')).toEqual({ id: 1, name: 'Alice' });
  });
  it('ignores keys not in object', () => {
    const obj = { a: 1 };
    expect(obj.pick('a', 'b' as any)).toEqual({ a: 1 });
  });
});

describe('Object.prototype.omit', () => {
  it('returns object without specified keys', () => {
    const obj = { id: 1, name: 'Alice', password: 'secret' };
    expect(obj.omit('password')).toEqual({ id: 1, name: 'Alice' });
  });
  it('returns full object when omitting nonexistent key', () => {
    const obj = { a: 1, b: 2 };
    expect(obj.omit('c' as any)).toEqual({ a: 1, b: 2 });
  });
});

describe('Object.prototype.deepEqual', () => {
  it('returns true for equal objects', () => {
    expect({ a: 1, b: [2, 3] }.deepEqual({ a: 1, b: [2, 3] })).toBe(true);
  });
  it('returns false for different objects', () => {
    expect({ a: 1 }.deepEqual({ a: 2 })).toBe(false);
  });
  it('returns true for equal arrays', () => {
    expect([1, 2, 3].deepEqual([1, 2, 3])).toBe(true);
  });
  it('returns false for different arrays', () => {
    expect([1, 2].deepEqual([1, 3])).toBe(false);
  });
});

describe('Object.prototype.mapValues', () => {
  it('transforms values', () => {
    const prices = { apple: 1, banana: 2, cherry: 3 };
    const result = prices.mapValues(v => (v as number) * 2);
    expect(result).toEqual({ apple: 2, banana: 4, cherry: 6 });
  });
  it('passes key to transform function', () => {
    const obj = { a: 1 };
    const result = obj.mapValues((v, k) => `${k}:${v}`);
    expect(result).toEqual({ a: 'a:1' });
  });
});

describe('Object.prototype.toArray', () => {
  it('converts object to key-value array', () => {
    const result = { x: 1, y: 2 }.toArray();
    expect(result).toEqual([{ key: 'x', value: 1 }, { key: 'y', value: 2 }]);
  });
  it('returns empty array for empty object', () => {
    expect({}.toArray()).toEqual([]);
  });
});

describe('Object.prototype.path', () => {
  it('accesses nested property by dot path', () => {
    const obj = { user: { address: { city: 'NYC' } } };
    expect(obj.path('user.address.city')).toBe('NYC');
  });
  it('returns undefined for missing path', () => {
    const obj = { a: { b: 1 } };
    expect(obj.path('a.c.d')).toBeUndefined();
  });
  it('accesses top-level property', () => {
    const obj = { name: 'Alice' };
    expect(obj.path('name')).toBe('Alice');
  });
});
