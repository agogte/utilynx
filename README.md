# utilynx

High-level utility functions for working with arrays, math, strings, and more — bringing expressive language features to JavaScript and TypeScript.

## Installation

```bash
npm install utilynx
```

## Usage

Import the package in your TypeScript or JavaScript project:

```typescript
import * as utilynx from 'utilynx';
// or import specific utilities:
import { groupBy, round } from 'utilynx';
```

Some utilities extend built-in prototypes (like `String`, `Object`, and `Date`).  
To use these, simply import the package once at the top of your entry file:

```typescript
import 'utilynx';
```

---

## API Reference

### Math Utilities (`math.ts`)

#### `sqrt(n: number): number`
Returns the square root of `n`.

```typescript
import { sqrt } from 'utilynx';
sqrt(9); // 3
```

#### `round(value: number, precision?: number): number`
Rounds a number to a specified number of decimal places.

```typescript
import { round } from 'utilynx';
round(3.14159, 2); // 3.14
round(10.5678);    // 11
```

#### `isEven(n: number): boolean`
Checks if a number is even.

```typescript
import { isEven } from 'utilynx';
isEven(4); // true
```

#### `isOdd(n: number): boolean`
Checks if a number is odd.

```typescript
import { isOdd } from 'utilynx';
isOdd(5); // true
```

---

### Collection Utilities (`collection.ts`)

#### `firstOrDefault<T>(arr: T[], predicate?: (item: T) => boolean): T | undefined`
Returns the first element in an array, or the first that matches a predicate, or `undefined` if none found.

```typescript
import { firstOrDefault } from 'utilynx';
firstOrDefault([1, 2, 3]); // 1
firstOrDefault([1, 2, 3], x => x > 1); // 2
```

#### `groupBy<T, K extends string | number | symbol>(array: T[], keySelector: (item: T) => K): Record<K, T[]>`
Groups array elements by a key.

```typescript
import { groupBy } from 'utilynx';
const data = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' }
];
const grouped = groupBy(data, item => item.type);
// grouped = { fruit: [...], vegetable: [...] }
```

#### `sum(arr: number[]): number | undefined`
Returns the sum of an array of numbers, or `undefined` if the array is empty.

```typescript
import { sum } from 'utilynx';
sum([1, 2, 3]); // 6
```

#### `average(arr: number[]): number | undefined`
Returns the average of an array of numbers, or `undefined` if the array is empty.

```typescript
import { average } from 'utilynx';
average([2, 4, 6]); // 4
```

---

### String Utilities (`string.ts`)

These methods extend the `String` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';
```

#### `String.prototype.isNullOrEmpty(): boolean`
Checks if a string is empty.

```typescript
''.isNullOrEmpty(); // true
'abc'.isNullOrEmpty(); // false
```

#### `String.prototype.padLeft(totalLength: number, padChar: string): string`
Pads the string on the left to the specified length.

```typescript
'abc'.padLeft(5, '0'); // '00abc'
```

#### `String.prototype.padRight(totalLength: number, padChar: string): string`
Pads the string on the right to the specified length.

```typescript
'abc'.padRight(5, '0'); // 'abc00'
```

---

### Date Utilities (`datetime.ts`)

These methods extend the `Date` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';
```

#### `Date.prototype.addDays(days: number): Date`
Returns a new `Date` with the specified number of days added.

```typescript
const d = new Date('2020-01-01');
d.addDays(1); // 2020-01-02
```

#### `Date.prototype.isWeekend(): boolean`
Checks if the date is a Saturday or Sunday.

```typescript
new Date('2023-06-24').isWeekend(); // true (Saturday)
```

#### `Date.prototype.toShortDateString(): string`
Returns the date as a string in `YYYY-MM-DD` format.

```typescript
new Date('2020-01-02T12:34:56Z').toShortDateString(); // '2020-01-02'
```

#### `Date.prototype.diffDays(otherDate: Date): number`
Returns the difference in whole days between two dates.

```typescript
const d1 = new Date('2020-01-01');
const d2 = new Date('2020-01-03');
d1.diffDays(d2); // 2
```

#### `Date.prototype.addHours(hours: number): Date`
Returns a new `Date` with the specified number of hours added.

```typescript
new Date('2020-01-01T00:00:00Z').addHours(2); // 2020-01-01T02:00:00Z
```

#### `Date.prototype.addMinutes(minutes: number): Date`
Returns a new `Date` with the specified number of minutes added.

```typescript
new Date('2020-01-01T00:00:00Z').addMinutes(30); // 2020-01-01T00:30:00Z
```

---

### Object Utilities (`extensions.ts`)

These methods extend the `Object` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';
```

#### `Object.prototype.hasValue(): boolean`
Checks if the object is not `null` or `undefined`.

```typescript
({}.hasValue()); // true
(null as any)?.hasValue?.(); // false
```

#### `Object.prototype.isEmpty(): boolean`
Checks if the object, array, or string is empty.

```typescript
({}.isEmpty()); // true
({ a: 1 }.isEmpty()); // false
''.isEmpty(); // true
[1].isEmpty(); // false
```

#### `Object.prototype.isNumeric(): boolean`
Checks if the object represents a numeric value.

```typescript
('123'.isNumeric()); // true
('abc'.isNumeric()); // false
(123 as any).isNumeric(); // true
(NaN as any).isNumeric(); // false
```

---

## License

This software is **not open source**.  
You must obtain explicit written permission from the author to use, copy, modify, or distribute this package.  
Commercial or non-commercial use requires a paid license.  
Contact the author for licensing terms and pricing.
