# 🌟 utilynx

[English](README.md) | **Français**

[![CI](https://github.com/agogte/utilynx/actions/workflows/ci.yml/badge.svg)](https://github.com/agogte/utilynx/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@agogte/utilynx?logo=npm&color=CB3837)](https://www.npmjs.com/package/@agogte/utilynx)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-22%2B-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Vite](https://img.shields.io/badge/built_with-Vite-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/tested_with-Vitest-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub_Actions-2088FF?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![Licence : Commerciale](https://img.shields.io/badge/licence-Commerciale-lightgrey)](LICENSE)

Des fonctions utilitaires de haut niveau pour manipuler les tableaux, les nombres, les chaînes de caractères et plus encore — en apportant des fonctionnalités expressives à JavaScript et TypeScript.

Ce projet étend les objets natifs JavaScript/TypeScript (`Array`, `Date`, `Number`, `Object` et `String`) avec des méthodes utilitaires puissantes qui simplifient les tâches courantes. Inspirées de LINQ (C#) et de la programmation fonctionnelle moderne, ces extensions rendent votre code plus expressif, lisible et efficace.

---

## 📦 Installation

```bash
npm install @agogte/utilynx
```

Importez-le une seule fois, au point d'entrée de votre application :

```ts
import '@agogte/utilynx';

[3, 1, 2].orderBy(x => x).take(2);   // [1, 2]
'Hello World'.toKebabCase();          // 'hello-world'
(42).toOrdinal();                     // '42nd'
new Date().addDays(7).isWeekend();    // true / false
```

---

## 🔧 Interfaces étendues

### 🧩 Extensions de `Array<T>`

| Méthode | Description |
|---------|-------------|
| `firstOrDefault(predicate?)` | Premier élément correspondant au prédicat, ou `undefined`. |
| `lastOrDefault(predicate?)` | Dernier élément correspondant au prédicat, ou `undefined`. |
| `groupBy(keySelector)` | Regroupe les éléments dans un dictionnaire de tableaux par clé. |
| `countBy(keySelector)` | Compte les éléments par clé. |
| `distinct(keySelector?)` | Supprime les doublons, éventuellement selon une clé. |
| `orderBy(keySelector)` | Nouveau tableau trié par ordre croissant selon la clé. |
| `orderByDesc(keySelector)` | Nouveau tableau trié par ordre décroissant selon la clé. |
| `chunk(size)` | Découpe le tableau en blocs de taille `size`. |
| `take(count)` | Les `count` premiers éléments. |
| `skip(count)` | Tous les éléments après les `count` premiers. |
| `flatten()` | Aplatit les tableaux imbriqués. |
| `intersect(other)` | Éléments présents dans les deux tableaux. |
| `except(other)` | Éléments absents de `other`. |
| `zip(other, transform?)` | Associe les éléments à ceux de `other` (avec transformation optionnelle). |
| `partition(predicate)` | Sépare en `[correspondants, reste]`. |
| `sum()` | Somme des valeurs numériques. |
| `average()` | Moyenne des valeurs numériques. |
| `min()` / `max()` | Plus petite / plus grande valeur numérique. |
| `median()` | Médiane des valeurs numériques. |

### 🗓️ Extensions de `Date`

| Méthode | Description |
|---------|-------------|
| `addMilliseconds(ms)` / `addSeconds(s)` / `addMinutes(m)` / `addHours(h)` | Nouvelle `Date` décalée de la durée indiquée. |
| `addDays(days)` / `addMonths(months)` / `addYears(years)` | Nouvelle `Date` décalée de la durée indiquée. |
| `startOfDay()` / `endOfDay()` | Début / fin de la même journée. |
| `startOfMonth()` / `endOfMonth()` | Début / fin du même mois. |
| `isBefore(other)` / `isAfter(other)` | Compare avec une autre date. |
| `isSameDay(other)` | `true` si les deux dates tombent le même jour calendaire. |
| `isWeekend()` / `isWeekday()` | Vérifie le jour de la semaine. |
| `diffDays(other)` / `diffHours(other)` / `diffMinutes(other)` | Écart avec une autre date. |
| `weekNumber()` | Numéro de semaine ISO. |
| `toShortDateString()` | Chaîne au format `YYYY-MM-DD`. |
| `toRelativeString()` | Temps relatif lisible, par ex. `"3 days ago"`. |
| `format(pattern)` | Formate la date selon un motif. |

### 🔢 Extensions de `Number`

| Méthode | Description |
|---------|-------------|
| `isEven()` / `isOdd()` | Vérifie la parité. |
| `between(min, max)` | `true` si le nombre est compris dans l'intervalle. |
| `clamp(min, max)` | Restreint le nombre à l'intervalle. |
| `round(precision?)` | Arrondit à `precision` décimales (par défaut : 0). |
| `floor()` / `ceil()` / `abs()` / `sign()` | Raccourcis vers les fonctions `Math` correspondantes. |
| `sqrt()` / `pow(exponent)` | Racine carrée / puissance. |
| `percentage(total)` | Ce nombre en pourcentage de `total`. |
| `toOrdinal()` | Chaîne ordinale anglaise, par ex. `1st`, `2nd`, `3rd`. |

### 📦 Extensions de `Object`

| Méthode | Description |
|---------|-------------|
| `hasValue()` | `true` si l'objet n'est ni `null`, ni `undefined`, ni vide. |
| `isEmpty()` | `true` si l'objet n'a aucune propriété énumérable. |
| `isNumeric()` | `true` si l'objet représente une valeur numérique. |
| `deepClone()` | Copie profonde de l'objet. |
| `deepEqual(other)` | Comparaison structurelle. |
| `pick(...keys)` / `omit(...keys)` | Nouvel objet avec uniquement / sans les clés indiquées. |
| `mapValues(fn)` | Nouvel objet dont chaque valeur est transformée. |
| `toArray()` | Convertit en tableau de paires `{ key, value }`. |
| `path(dotPath)` | Lit une valeur imbriquée, par ex. `obj.path('a.b.c')`. |

### 🧵 Extensions de `String`

| Méthode | Description |
|---------|-------------|
| `isNullOrEmpty()` | `true` si la chaîne est `null`, `undefined` ou vide. |
| `padLeft(totalLength, padChar)` / `padRight(totalLength, padChar)` | Complète la chaîne jusqu'à la longueur voulue. |
| `capitalize()` | Met le premier caractère en majuscule. |
| `toCamelCase()` / `toPascalCase()` / `toSnakeCase()` / `toKebabCase()` | Conversions de casse. |
| `toSlug()` | Slug adapté aux URL. |
| `truncate(length, suffix?)` | Raccourcit la chaîne et ajoute un suffixe. |
| `words()` | Découpe en tableau de mots. |
| `countOccurrences(sub)` | Nombre d'occurrences de `sub`. |
| `reverse()` | Chaîne inversée. |
| `isPalindrome()` | `true` si la chaîne se lit de la même façon dans les deux sens. |
| `isEmail()` / `isUrl()` | Validation de format. |

---

## 🛠️ Développement

```bash
npm install
npm test             # lance la suite de tests Vitest (npm run test:watch en mode watch)
npm run build:prod   # bundle Vite + déclarations de types + obfuscation dans dist-obf/
```

### CI/CD

GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) :

- **Pull requests** vers `master`/`main` : vérification des types et tests sur Node 22 et 24.
- **Push / merge** sur `master`/`main` : tests, puis préparation (staging) d'une release sur npm si la version de `package.json` n'est pas encore publiée. Approuvez-la avec la 2FA pour la mettre en ligne : `npm stage list`, puis `npm stage approve <stage-id>`. Incrémentez la version (`npm version patch|minor|major`) pour publier une nouvelle release.

La publication utilise le [Trusted Publishing de npm](https://docs.npmjs.com/trusted-publishers) (OIDC) : **aucun jeton npm n'est stocké sur GitHub**. Configuration unique sur npmjs.com → **Settings** du paquet → **Trusted Publisher** → GitHub Actions, avec le propriétaire `agogte`, le dépôt `utilynx` et le workflow `ci.yml`.

---

## 🚨 Avertissement

Ces extensions modifient les prototypes natifs, ce qui peut provoquer des conflits avec d'autres bibliothèques ou des comportements inattendus. À utiliser avec prudence, de préférence dans des environnements maîtrisés ou internes.

Pour rester sûr et modulaire sur des projets publics ou partagés, envisagez d'encapsuler ces méthodes dans des fonctions utilitaires plutôt que de modifier les prototypes globalement.

---

## 📄 Licence

Ce logiciel n'est <b>PAS</b> open source.
Vous devez obtenir l'autorisation écrite explicite de l'auteur pour utiliser, copier, modifier ou distribuer ce paquet.
Toute utilisation, commerciale ou non, nécessite une licence payante.
Contactez l'auteur pour connaître les conditions et les tarifs.

---

## 📣 Remerciements

Inspiré par l'élégance de LINQ en C# et la puissance de la programmation fonctionnelle. Bon code ! 🚀
