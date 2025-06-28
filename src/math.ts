/**
 * Rounds a number to a specified precision.
*
* @param value - The number to round.
* @param precision - The number of decimal places to round to. Defaults to 0.
* @returns The rounded number.
*
* @example
* ```typescript
* round(3.14159, 2); // Returns 3.14
* round(10.5678);    // Returns 11
* ```
*/

export const sqrt = (n: number): number => {
  return Math.sqrt(n);
};

export function round(value: number, precision = 0): number {
  const multiplier = Math.pow(10, precision);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}


export function isEven(n: number): boolean {
  return (n & 1) === 0;
}

export function isOdd(n: number): boolean {
  return (n & 1) === 1;
}