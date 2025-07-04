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
    groupBy<K extends string | number | symbol>(
      keySelector: (item: T) => K
    ): Record<K, T[]>;
    sum(this: number[]): number | undefined;
    average(this: number[]): number | undefined;
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
