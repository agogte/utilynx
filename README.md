# 🌟 utilynx 

High-level utility functions for working with arrays, math, strings, and more — bringing expressive language features to JavaScript and TypeScript. 

This project extends the native JavaScript/TypeScript objects (`Array`, `Date`, `Number`, `Object`, and `String`) with powerful utility methods to simplify common programming patterns. Inspired by LINQ (C#) and modern functional programming, these extensions make your code more expressive, readable, and efficient.

---

## 📦 Installation

Simply include the module in your TypeScript project:

```ts
import '@agogte/utilynx';
```

Or if you've bundled it as a package:

```bash
npm install @agogte/utilynx
```

---

## 🔧 Extended Interfaces

### 🧩 `Array<T>` Extensions

| Method | Description |
|--------|-------------|
| `firstOrDefault(predicate?)` | Returns the first element that matches the predicate, or `undefined` if none found. |
| `groupBy(keySelector)` | Groups elements by the result of `keySelector`, returns a dictionary of arrays. |
| `sum()` | Returns the sum of numeric values in the array. |
| `average()` | Returns the average of numeric values in the array. |

### 🗓️ `Date` Extensions

| Method | Description |
|--------|-------------|
| `addDays(days)` | Returns a new `Date` with the specified number of days added. |
| `addHours(hours)` | Returns a new `Date` with the specified number of hours added. |
| `addMinutes(minutes)` | Returns a new `Date` with the specified number of minutes added. |
| `isWeekend()` | Returns `true` if the date falls on a weekend. |
| `toShortDateString()` | Returns a string in `YYYY-MM-DD` format. |
| `diffDays(otherDate)` | Returns the number of full days between two dates. |

### 🔢 `Number` Extensions

| Method | Description |
|--------|-------------|
| `isEven()` | Returns `true` if the number is even. |
| `isOdd()` | Returns `true` if the number is odd. |
| `sqrt()` | Returns the square root of the number. |
| `round(precision?)` | Rounds the number to a specified number of decimal places (default: 0). |

### 📦 `Object` Extensions

| Method | Description |
|--------|-------------|
| `hasValue()` | Returns `true` if the object is not `null`, `undefined`, or empty. |
| `isEmpty()` | Returns `true` if the object has no enumerable properties. |
| `isNumeric()` | Returns `true` if the object represents a numeric value. |

### 🧵 `String` Extensions

| Method | Description |
|--------|-------------|
| `isNullOrEmpty()` | Returns `true` if the string is `null`, `undefined`, or empty. |
| `padLeft(totalLength, padChar)` | Pads the string on the left to the desired total length. |
| `padRight(totalLength, padChar)` | Pads the string on the right to the desired total length. |

---

## 🚨 Disclaimer

These extensions modify native prototypes, which can cause conflicts with other libraries or unexpected behavior. Use with caution, preferably in controlled or internal environments.

To keep things safe and modular, consider wrapping these in utility functions instead of modifying prototypes globally if working on public or shared projects.

---

## 📄 License

This software is <b>NOT</b> open source.
You must obtain explicit written permission from the author to use, copy, modify, or distribute this package.
Commercial or non-commercial use requires a paid license.
Contact the author for licensing terms and pricing.

---

## 📣 Shoutout

Inspired by the elegance of C# LINQ and the power of functional programming. Happy coding! 🚀
