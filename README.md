# 🌟 utilynx

**English** | [Français](README.fr.md)

[![CI](https://github.com/agogte/utilynx/actions/workflows/ci.yml/badge.svg)](https://github.com/agogte/utilynx/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@agogte/utilynx?logo=npm&color=CB3837)](https://www.npmjs.com/package/@agogte/utilynx)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/built_with-Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/tested_with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![License: Commercial](https://img.shields.io/badge/license-Commercial-lightgrey)](LICENSE)

High-level utility functions for working with arrays, math, strings, and more — bringing expressive language features to JavaScript and TypeScript.

This project extends the native JavaScript/TypeScript objects (`Array`, `Date`, `Number`, `Object`, and `String`) with powerful utility methods to simplify common programming patterns. Inspired by LINQ (C#) and modern functional programming, these extensions make your code more expressive, readable, and efficient.

---

## 📦 Installation

```bash
npm install @agogte/utilynx
```

Then import it once, at your app's entry point:

```ts
import '@agogte/utilynx';

[3, 1, 2].orderBy(x => x).take(2);   // [1, 2]
'Hello World'.toKebabCase();          // 'hello-world'
(42).toOrdinal();                     // '42nd'
new Date().addDays(7).isWeekend();    // true / false
```

---

## 🔧 Extended Interfaces

### 🧩 `Array<T>` Extensions

| Method | Description |
|--------|-------------|
| `firstOrDefault(predicate?)` | First element matching the predicate, or `undefined`. |
| `lastOrDefault(predicate?)` | Last element matching the predicate, or `undefined`. |
| `groupBy(keySelector)` | Groups elements into a dictionary of arrays by key. |
| `countBy(keySelector)` | Counts elements per key. |
| `distinct(keySelector?)` | Removes duplicates, optionally by key. |
| `orderBy(keySelector)` | Returns a new array sorted ascending by key. |
| `orderByDesc(keySelector)` | Returns a new array sorted descending by key. |
| `chunk(size)` | Splits the array into chunks of `size`. |
| `take(count)` | First `count` elements. |
| `skip(count)` | All elements after the first `count`. |
| `flatten()` | Flattens nested arrays. |
| `intersect(other)` | Elements present in both arrays. |
| `except(other)` | Elements not present in `other`. |
| `zip(other, transform?)` | Pairs elements with `other` (optionally transformed). |
| `partition(predicate)` | Splits into `[matching, rest]`. |
| `sum()` | Sum of numeric values. |
| `average()` | Average of numeric values. |
| `min()` / `max()` | Smallest / largest numeric value. |
| `median()` | Median of numeric values. |

### 🗓️ `Date` Extensions

| Method | Description |
|--------|-------------|
| `addMilliseconds(ms)` / `addSeconds(s)` / `addMinutes(m)` / `addHours(h)` | Returns a new `Date` shifted by the given amount. |
| `addDays(days)` / `addMonths(months)` / `addYears(years)` | Returns a new `Date` shifted by the given amount. |
| `startOfDay()` / `endOfDay()` | Start / end of the same day. |
| `startOfMonth()` / `endOfMonth()` | Start / end of the same month. |
| `isBefore(other)` / `isAfter(other)` | Compares with another date. |
| `isSameDay(other)` | `true` if both dates fall on the same calendar day. |
| `isWeekend()` / `isWeekday()` | Day-of-week checks. |
| `diffDays(other)` / `diffHours(other)` / `diffMinutes(other)` | Difference from another date. |
| `weekNumber()` | ISO week number. |
| `toShortDateString()` | `YYYY-MM-DD` string. |
| `toRelativeString()` | Human-readable relative time, e.g. `"3 days ago"`. |
| `format(pattern)` | Formats the date using a pattern string. |

### 🔢 `Number` Extensions

| Method | Description |
|--------|-------------|
| `isEven()` / `isOdd()` | Parity checks. |
| `between(min, max)` | `true` if the number is within the range. |
| `clamp(min, max)` | Constrains the number to the range. |
| `round(precision?)` | Rounds to `precision` decimal places (default: 0). |
| `floor()` / `ceil()` / `abs()` / `sign()` | Shortcuts for the matching `Math` functions. |
| `sqrt()` / `pow(exponent)` | Square root / power. |
| `percentage(total)` | This number as a percentage of `total`. |
| `toOrdinal()` | Ordinal string, e.g. `1st`, `2nd`, `3rd`. |

### 📦 `Object` Extensions

| Method | Description |
|--------|-------------|
| `hasValue()` | `true` if not `null`, `undefined`, or empty. |
| `isEmpty()` | `true` if the object has no enumerable properties. |
| `isNumeric()` | `true` if the object represents a numeric value. |
| `deepClone()` | Deep copy of the object. |
| `deepEqual(other)` | Structural equality check. |
| `pick(...keys)` / `omit(...keys)` | New object with only / without the given keys. |
| `mapValues(fn)` | New object with each value transformed. |
| `toArray()` | Converts to an array of `{ key, value }` pairs. |
| `path(dotPath)` | Reads a nested value, e.g. `obj.path('a.b.c')`. |

### 🧵 `String` Extensions

| Method | Description |
|--------|-------------|
| `isNullOrEmpty()` | `true` if the string is `null`, `undefined`, or empty. |
| `padLeft(totalLength, padChar)` / `padRight(totalLength, padChar)` | Pads to the desired total length. |
| `capitalize()` | Uppercases the first character. |
| `toCamelCase()` / `toPascalCase()` / `toSnakeCase()` / `toKebabCase()` | Case conversions. |
| `toSlug()` | URL-friendly slug. |
| `truncate(length, suffix?)` | Shortens the string and appends a suffix. |
| `words()` | Splits into an array of words. |
| `countOccurrences(sub)` | Number of times `sub` appears. |
| `reverse()` | Reversed string. |
| `isPalindrome()` | `true` if the string reads the same backwards. |
| `isEmail()` / `isUrl()` | Format validation. |

---

## 🛠️ Development

```bash
npm install
npm test             # run the Vitest test suite (npm run test:watch for watch mode)
npm run build:prod   # Vite bundle + type declarations + obfuscation into dist-obf/
```

### CI/CD

GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)):

- **Pull requests** to `master`/`main`: type-check and run tests on Node 22 and 24.
- **Push / merge** to `master`/`main`: run tests, then stage a release on npm if the version in `package.json` isn't already published. Approve it with 2FA to make it live: `npm stage list`, then `npm stage approve <stage-id>`. Bump the version (`npm version patch|minor|major`) to ship a release.

Publishing uses [npm Trusted Publishing](https://docs.npmjs.com/trusted-publishers) (OIDC): **no npm token is stored in GitHub**. One-time setup on npmjs.com → package **Settings** → **Trusted Publisher** → GitHub Actions, with owner `agogte`, repository `utilynx`, workflow `ci.yml`.

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
