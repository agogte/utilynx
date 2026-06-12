/**
 * Extends the global `Date` interface with additional utility methods.
 *
 * @method addDays
 * Adds the specified number of days to the current date instance and returns a new `Date` object.
 * @param days - The number of days to add (can be negative).
 * @returns A new `Date` object with the days added.
 *
 * @method isWeekend
 * Determines whether the current date instance falls on a weekend (Saturday or Sunday).
 * @returns `true` if the date is a weekend, otherwise `false`.
 *
 * @method toShortDateString
 * Returns a string representation of the date in ISO format "YYYY-MM-DD".
 * @returns A short date string.
 *
 * @method diffDays
 * Calculates the difference in whole days between the current date instance and another date.
 * @param otherDate - The date to compare with.
 * @returns The number of days difference as an integer.
 *
 * @method addHours
 * Adds the specified number of hours to the current date instance and returns a new `Date` object.
 * @param hours - The number of hours to add (can be negative).
 * @returns A new `Date` object with the hours added.
 *
 * @method addMinutes
 * Adds the specified number of minutes to the current date instance and returns a new `Date` object.
 * @param minutes - The number of minutes to add (can be negative).
 * @returns A new `Date` object with the minutes added.
 */


export {};

declare global {
  interface Array<T> {
    firstOrDefault(predicate?: (item: T) => boolean): T | undefined;
    groupBy<K extends string | number | symbol>(keySelector: (item: T) => K): Record<K, T[]>;
    sum(this: number[]): number | undefined;
    average(this: number[]): number | undefined;
    lastOrDefault(predicate?: (item: T) => boolean): T | undefined;
    distinct(keySelector?: (item: T) => unknown): T[];
    orderBy<K>(keySelector: (item: T) => K): T[];
    orderByDesc<K>(keySelector: (item: T) => K): T[];
    chunk(size: number): T[][];
    take(count: number): T[];
    skip(count: number): T[];
    flatten(): unknown[];
    intersect(other: T[]): T[];
    except(other: T[]): T[];
    zip<U>(other: U[], transform?: (a: T, b: U) => unknown): unknown[];
    partition(predicate: (item: T) => boolean): [T[], T[]];
    countBy<K extends string | number | symbol>(keySelector: (item: T) => K): Record<K, number>;
    min(this: number[]): number | undefined;
    max(this: number[]): number | undefined;
    median(this: number[]): number | undefined;
  }
}

if (!Array.prototype.firstOrDefault) {
  Array.prototype.firstOrDefault = function<T>(this: T[], predicate?: (item: T) => boolean): T | undefined {
    if (!Array.isArray(this)) return undefined;
    return predicate ? this.find(predicate) : this[0];
  };
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function<T, K extends string | number | symbol>(
    this: T[],
    keySelector: (item: T) => K
  ): Record<K, T[]> {
    const result: Record<K, T[]> = Object.create(null);
    for (let i = 0, len = this.length; i < len; ++i) {
      const item = this[i];
      const key = keySelector(item);
      if (!result[key]) {
        result[key] = [item];
      } else {
        result[key].push(item);
      }
    }
    return result;
  };
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = this.length; i < len; ++i) {
      total += this[i];
    }
    return total;
  };
}

if (!Array.prototype.average) {
  Array.prototype.average = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = this.length; i < len; ++i) {
      total += this[i];
    }
    return total / this.length;
  };
}

if (!Array.prototype.lastOrDefault) {
  Array.prototype.lastOrDefault = function<T>(this: T[], predicate?: (item: T) => boolean): T | undefined {
    if (!Array.isArray(this)) return undefined;
    if (!predicate) return this[this.length - 1];
    for (let i = this.length - 1; i >= 0; i--) {
      if (predicate(this[i])) return this[i];
    }
    return undefined;
  };
}

if (!Array.prototype.distinct) {
  Array.prototype.distinct = function<T>(this: T[], keySelector?: (item: T) => unknown): T[] {
    if (!keySelector) return [...new Set(this)];
    const seen = new Set<unknown>();
    const result: T[] = [];
    for (let i = 0; i < this.length; i++) {
      const key = keySelector(this[i]);
      if (!seen.has(key)) {
        seen.add(key);
        result.push(this[i]);
      }
    }
    return result;
  };
}

if (!Array.prototype.orderBy) {
  Array.prototype.orderBy = function<T>(this: T[], keySelector: (item: T) => unknown): T[] {
    return [...this].sort((a, b) => {
      const ka = keySelector(a) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
      const kb = keySelector(b) as any;
      if (ka < kb) return -1;
      if (ka > kb) return 1;
      return 0;
    });
  };
}

if (!Array.prototype.orderByDesc) {
  Array.prototype.orderByDesc = function<T>(this: T[], keySelector: (item: T) => unknown): T[] {
    return [...this].sort((a, b) => {
      const ka = keySelector(a) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
      const kb = keySelector(b) as any;
      if (ka > kb) return -1;
      if (ka < kb) return 1;
      return 0;
    });
  };
}

if (!Array.prototype.chunk) {
  Array.prototype.chunk = function<T>(this: T[], size: number): T[][] {
    if (size <= 0) return [];
    const result: T[][] = [];
    for (let i = 0; i < this.length; i += size) {
      result.push(this.slice(i, i + size));
    }
    return result;
  };
}

if (!Array.prototype.take) {
  Array.prototype.take = function<T>(this: T[], count: number): T[] {
    return this.slice(0, count);
  };
}

if (!Array.prototype.skip) {
  Array.prototype.skip = function<T>(this: T[], count: number): T[] {
    return this.slice(count);
  };
}

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function(): unknown[] {
    return this.flat(Infinity) as unknown[];
  };
}

if (!Array.prototype.intersect) {
  Array.prototype.intersect = function<T>(this: T[], other: T[]): T[] {
    const set = new Set(other);
    return this.filter(item => set.has(item));
  };
}

if (!Array.prototype.except) {
  Array.prototype.except = function<T>(this: T[], other: T[]): T[] {
    const set = new Set(other);
    return this.filter(item => !set.has(item));
  };
}

if (!Array.prototype.zip) {
  Array.prototype.zip = function<T, U>(this: T[], other: U[], transform?: (a: T, b: U) => unknown): unknown[] {
    const len = Math.min(this.length, other.length);
    const result: unknown[] = new Array(len);
    for (let i = 0; i < len; i++) {
      result[i] = transform ? transform(this[i], other[i]) : [this[i], other[i]];
    }
    return result;
  };
}

if (!Array.prototype.partition) {
  Array.prototype.partition = function<T>(this: T[], predicate: (item: T) => boolean): [T[], T[]] {
    const match: T[] = [];
    const rest: T[] = [];
    for (let i = 0; i < this.length; i++) {
      (predicate(this[i]) ? match : rest).push(this[i]);
    }
    return [match, rest];
  };
}

if (!Array.prototype.countBy) {
  Array.prototype.countBy = function<T, K extends string | number | symbol>(
    this: T[],
    keySelector: (item: T) => K
  ): Record<K, number> {
    const result = Object.create(null) as Record<K, number>;
    for (let i = 0; i < this.length; i++) {
      const key = keySelector(this[i]);
      result[key] = (result[key] || 0) + 1;
    }
    return result;
  };
}

if (!Array.prototype.min) {
  Array.prototype.min = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let min = this[0];
    for (let i = 1; i < this.length; i++) {
      if (this[i] < min) min = this[i];
    }
    return min;
  };
}

if (!Array.prototype.max) {
  Array.prototype.max = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let max = this[0];
    for (let i = 1; i < this.length; i++) {
      if (this[i] > max) max = this[i];
    }
    return max;
  };
}

if (!Array.prototype.median) {
  Array.prototype.median = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    const sorted = [...this].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
}
