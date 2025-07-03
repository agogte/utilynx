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

Some utilities extend built-in prototypes (like `Number`, `Array`, `String`, `Object`, and `Date`).  
To use these, simply import the package once at the top of your entry file:

```typescript
import 'utilynx';
```

---

## API Reference

### Math Utilities (`math.ts`)

These methods extend the `Number` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';

(9).sqrt(); // 3

(3.14159).round(2); // 3.14
(10.5678).round();  // 11

(4).isEven(); // true
(5).isOdd();  // true
```

#### `Number.prototype.sqrt(): number`
Returns the square root of the number.

#### `Number.prototype.round(precision?: number): number`
Rounds the number to a specified number of decimal places.

#### `Number.prototype.isEven(): boolean`
Checks if the number is even.

#### `Number.prototype.isOdd(): boolean`
Checks if the number is odd.

---

### Collection Utilities (`collection.ts`)

These methods extend the `Array` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';

[1, 2, 3].firstOrDefault(); // 1
[1, 2, 3].firstOrDefault(x => x > 1); // 2

const grouped = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' }
].groupBy(item => item.type);
// grouped = { fruit: [...], vegetable: [...] }

[1, 2, 3].sum(); // 6
[2, 4, 6].average(); // 4
```

#### `Array.prototype.firstOrDefault(predicate?: (item: T) => boolean): T | undefined`
Returns the first element in an array, or the first that matches a predicate, or `undefined` if none found.

#### `Array.prototype.groupBy(keySelector: (item: T) => K): Record<K, T[]>`
Groups array elements by a key.

#### `Array.prototype.sum(): number | undefined`
Returns the sum of an array of numbers, or `undefined` if the array is empty.

#### `Array.prototype.average(): number | undefined`
Returns the average of an array of numbers, or `undefined` if the array is empty.

---

### String Utilities (`string.ts`)

These methods extend the `String` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';

''.isNullOrEmpty(); // true
'abc'.isNullOrEmpty(); // false

'abc'.padLeft(5, '0'); // '00abc'
'abc'.padRight(5, '0'); // 'abc00'
```

#### `String.prototype.isNullOrEmpty(): boolean`
Checks if a string is empty.

#### `String.prototype.padLeft(totalLength: number, padChar: string): string`
Pads the string on the left to the specified length.

#### `String.prototype.padRight(totalLength: number, padChar: string): string`
Pads the string on the right to the specified length.

---

### Date Utilities (`datetime.ts`)

These methods extend the `Date` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';

const d = new Date('2020-01-01');
d.addDays(1); // 2020-01-02

new Date('2023-06-24').isWeekend(); // true (Saturday)

new Date('2020-01-02T12:34:56Z').toShortDateString(); // '2020-01-02'

const d1 = new Date('2020-01-01');
const d2 = new Date('2020-01-03');
d1.diffDays(d2); // 2

new Date('2020-01-01T00:00:00Z').addHours(2); // 2020-01-01T02:00:00Z
new Date('2020-01-01T00:00:00Z').addMinutes(30); // 2020-01-01T00:30:00Z
```

#### `Date.prototype.addDays(days: number): Date`
Returns a new `Date` with the specified number of days added.

#### `Date.prototype.isWeekend(): boolean`
Checks if the date is a Saturday or Sunday.

#### `Date.prototype.toShortDateString(): string`
Returns the date as a string in `YYYY-MM-DD` format.

#### `Date.prototype.diffDays(otherDate: Date): number`
Returns the difference in whole days between two dates.

#### `Date.prototype.addHours(hours: number): Date`
Returns a new `Date` with the specified number of hours added.

#### `Date.prototype.addMinutes(minutes: number): Date`
Returns a new `Date` with the specified number of minutes added.

---

### Object Utilities (`extensions.ts`)

These methods extend the `Object` prototype.  
**Import the package once to enable them:**

```typescript
import 'utilynx';

({}.hasValue()); // true
(null as any)?.hasValue?.(); // false

({}.isEmpty()); // true
({ a: 1 }.isEmpty()); // false
''.isEmpty(); // true
[1].isEmpty(); // false

('123'.isNumeric()); // true
('abc'.isNumeric()); // false
(123 as any).isNumeric(); // true
(NaN as any).isNumeric(); // false
```

#### `Object.prototype.hasValue(): boolean`
Checks if the object is not `null` or `undefined`.

#### `Object.prototype.isEmpty(): boolean`
Checks if the object, array, or string is empty.

#### `Object.prototype.isNumeric(): boolean`
Checks if the object represents a numeric value.

---

## License

This software is **not open source**.  
You must obtain explicit written permission from the author to use, copy, modify, or distribute this package.  
Commercial or non-commercial use requires a paid license.  
Contact the author for licensing terms and pricing.
