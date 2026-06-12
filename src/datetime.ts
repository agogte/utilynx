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
        addSeconds(seconds: number): Date;
        addMilliseconds(ms: number): Date;
        addMonths(months: number): Date;
        addYears(years: number): Date;
        startOfDay(): Date;
        endOfDay(): Date;
        startOfMonth(): Date;
        endOfMonth(): Date;
        isBefore(other: Date): boolean;
        isAfter(other: Date): boolean;
        isSameDay(other: Date): boolean;
        isWeekday(): boolean;
        toRelativeString(): string;
        diffHours(other: Date): number;
        diffMinutes(other: Date): number;
        weekNumber(): number;
        format(pattern: string): string;
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

Date.prototype.addSeconds = function (seconds: number): Date {
    return new Date(this.getTime() + seconds * 1000);
};

Date.prototype.addMilliseconds = function (ms: number): Date {
    return new Date(this.getTime() + ms);
};

Date.prototype.addMonths = function (months: number): Date {
    const d = new Date(this.valueOf());
    d.setMonth(d.getMonth() + months);
    return d;
};

Date.prototype.addYears = function (years: number): Date {
    const d = new Date(this.valueOf());
    d.setFullYear(d.getFullYear() + years);
    return d;
};

Date.prototype.startOfDay = function (): Date {
    const d = new Date(this.valueOf());
    d.setHours(0, 0, 0, 0);
    return d;
};

Date.prototype.endOfDay = function (): Date {
    const d = new Date(this.valueOf());
    d.setHours(23, 59, 59, 999);
    return d;
};

Date.prototype.startOfMonth = function (): Date {
    const d = new Date(this.getFullYear(), this.getMonth(), 1);
    d.setHours(0, 0, 0, 0);
    return d;
};

Date.prototype.endOfMonth = function (): Date {
    const d = new Date(this.getFullYear(), this.getMonth() + 1, 0);
    d.setHours(23, 59, 59, 999);
    return d;
};

Date.prototype.isBefore = function (other: Date): boolean {
    return this.getTime() < other.getTime();
};

Date.prototype.isAfter = function (other: Date): boolean {
    return this.getTime() > other.getTime();
};

Date.prototype.isSameDay = function (other: Date): boolean {
    return this.getFullYear() === other.getFullYear() &&
        this.getMonth() === other.getMonth() &&
        this.getDate() === other.getDate();
};

Date.prototype.isWeekday = function (): boolean {
    const day = this.getDay();
    return day !== 0 && day !== 6;
};

Date.prototype.toRelativeString = function (): string {
    const diffMs = this.getTime() - Date.now();
    const absDiffMs = Math.abs(diffMs);
    const seconds = Math.floor(absDiffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const past = diffMs < 0;

    if (seconds < 10) return 'just now';

    let value: string;
    if (seconds < 60) {
        value = `${seconds} second${seconds !== 1 ? 's' : ''}`;
    } else if (minutes < 60) {
        value = `${minutes} minute${minutes !== 1 ? 's' : ''}`;
    } else if (hours < 24) {
        value = `${hours} hour${hours !== 1 ? 's' : ''}`;
    } else {
        value = `${days} day${days !== 1 ? 's' : ''}`;
    }

    return past ? `${value} ago` : `in ${value}`;
};

Date.prototype.diffHours = function (other: Date): number {
    return Math.floor((other.getTime() - this.getTime()) / 3600000);
};

Date.prototype.diffMinutes = function (other: Date): number {
    return Math.floor((other.getTime() - this.getTime()) / 60000);
};

Date.prototype.weekNumber = function (): number {
    const d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

Date.prototype.format = function (pattern: string): string {
    const pad = (n: number) => String(n).padStart(2, '0');
    return pattern
        .replace('YYYY', String(this.getFullYear()))
        .replace('MM', pad(this.getMonth() + 1))
        .replace('DD', pad(this.getDate()))
        .replace('HH', pad(this.getHours()))
        .replace('mm', pad(this.getMinutes()))
        .replace('ss', pad(this.getSeconds()));
};
