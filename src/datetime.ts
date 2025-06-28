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
 * Returns a string representation of the date in a short, locale-specific format (e.g., "YYYY-MM-DD").
 * @returns A short date string.
 *
 * @method diffDays
 * Calculates the difference in whole days between the current date instance and another date.
 * @param otherDate - The date to compare with.
 * @returns The number of days difference as an integer.
 */


declare global {
    interface Date {
        addDays(days: number): Date;
        isWeekend(): boolean;
        toShortDateString(): string;
        diffDays(otherDate: Date): number;
        addHours(hours: number): Date;
        addMinutes(minutes: number): Date;
    }
}

export {};

if (!Date.prototype.addDays) {
  Object.defineProperty(Date.prototype, 'addDays', {
    value: function (days: number) {
      const date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    },
    enumerable: false,
  });
}

if (!Date.prototype.isWeekend) {
  Object.defineProperty(Date.prototype, 'isWeekend', {
    value: function () {
      const day = this.getDay();
      return day === 0 || day === 6;
    },
    enumerable: false,
  });
}


if (!Date.prototype.toShortDateString) {
  Object.defineProperty(Date.prototype, 'toShortDateString', {
    value: function (): string {
      return this.toISOString().slice(0, 10);
    },
    enumerable: false,
  });
}


Date.prototype.diffDays = function (otherDate: Date): number {
    const a = Date.UTC(this.getFullYear(), this.getMonth(), this.getDate());
    const b = Date.UTC(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate());
    return Math.floor((b - a) / 86400000);
};

Date.prototype.addHours = function (hours: number): Date {
    return new Date(this.getTime() + hours * 3600000);
};

Date.prototype.addMinutes = function (minutes: number): Date {
    return new Date(this.getTime() + minutes * 60000);
};
