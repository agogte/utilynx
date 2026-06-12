/**
 * Extends the global `Number` interface with additional utility methods.
 *
 * @method isEven
 * Determines whether the current number is even.
 * @returns `true` if the number is even, otherwise `false`.
 *
 * @method isOdd
 * Determines whether the current number is odd.
 * @returns `true` if the number is odd, otherwise `false`.
 *
 * @method sqrt
 * Returns the square root of the current number.
 * @returns The square root as a number.
 *
 * @method round
 * Rounds the current number to the specified number of decimal places.
 * @param precision - The number of decimal places to round to (default is 0).
 * @returns The rounded number.
 */

export {};

declare global {
  interface Number {
    isEven(): boolean;
    isOdd(): boolean;
    sqrt(): number;
    round(precision?: number): number;
    clamp(min: number, max: number): number;
    abs(): number;
    between(min: number, max: number): boolean;
    pow(exponent: number): number;
    floor(): number;
    ceil(): number;
    toOrdinal(): string;
    percentage(total: number): number;
    sign(): number;
  }
}

if (!Number.prototype.isEven) {
  Number.prototype.isEven = function (): boolean {
    return (this.valueOf() & 1) === 0;
  };
}

if (!Number.prototype.isOdd) {
  Number.prototype.isOdd = function (): boolean {
    return (this.valueOf() & 1) === 1;
  };
}

if (!Number.prototype.sqrt) {
  Number.prototype.sqrt = function (): number {
    return Math.sqrt(this.valueOf());
  };
}

if (!Number.prototype.round) {
  Number.prototype.round = function (precision = 0): number {
    const multiplier = Math.pow(10, precision);
    return Math.round((this.valueOf() + Number.EPSILON) * multiplier) / multiplier;
  };
}

if (!Number.prototype.clamp) {
  Number.prototype.clamp = function (min: number, max: number): number {
    return Math.min(Math.max(this.valueOf(), min), max);
  };
}

if (!Number.prototype.abs) {
  Number.prototype.abs = function (): number {
    return Math.abs(this.valueOf());
  };
}

if (!Number.prototype.between) {
  Number.prototype.between = function (min: number, max: number): boolean {
    const n = this.valueOf();
    return n >= min && n <= max;
  };
}

if (!Number.prototype.pow) {
  Number.prototype.pow = function (exponent: number): number {
    return Math.pow(this.valueOf(), exponent);
  };
}

if (!Number.prototype.floor) {
  Number.prototype.floor = function (): number {
    return Math.floor(this.valueOf());
  };
}

if (!Number.prototype.ceil) {
  Number.prototype.ceil = function (): number {
    return Math.ceil(this.valueOf());
  };
}

if (!Number.prototype.toOrdinal) {
  Number.prototype.toOrdinal = function (): string {
    const n = Math.abs(Math.floor(this.valueOf()));
    const suffix = ['th', 'st', 'nd', 'rd'];
    const v = n % 100;
    return n + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
  };
}

if (!Number.prototype.percentage) {
  Number.prototype.percentage = function (total: number): number {
    if (total === 0) return 0;
    return (this.valueOf() / total) * 100;
  };
}

if (!Number.prototype.sign) {
  Number.prototype.sign = function (): number {
    return Math.sign(this.valueOf());
  };
}
