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
