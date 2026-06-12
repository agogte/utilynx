export {};

/**
 * Extends the global `String` interface with utility methods.
 *
 * @remarks
 * These methods provide convenient ways to check for null or empty strings,
 * and to pad strings to a desired length from the left or right.
 *
 * @method
 * isNullOrEmpty
 * Checks whether the string is `null`, `undefined`, or an empty string.
 * @returns `true` if the string is `null`, `undefined`, or empty; otherwise, `false`.
 *
 * @method
 * padLeft
 * Pads the current string on the left with the specified character until the resulting string reaches the given total length.
 * @param totalLength - The desired total length of the resulting string.
 * @param padChar - The character to use for padding.
 * @returns The padded string.
 *
 * @method
 * padRight
 * Pads the current string on the right with the specified character until the resulting string reaches the given total length.
 * @param totalLength - The desired total length of the resulting string.
 * @param padChar - The character to use for padding.
 * @returns The padded string.
 */

declare global {
    interface String {
        isNullOrEmpty(): boolean;
        padLeft(totalLength: number, padChar: string): string;
        padRight(totalLength: number, padChar: string): string;
        capitalize(): string;
        toCamelCase(): string;
        toPascalCase(): string;
        toSnakeCase(): string;
        toKebabCase(): string;
        truncate(length: number, suffix?: string): string;
        countOccurrences(sub: string): number;
        toSlug(): string;
        words(): string[];
        isEmail(): boolean;
        isUrl(): boolean;
        reverse(): string;
        isPalindrome(): boolean;
    }
}

String.prototype.isNullOrEmpty = function (): boolean {
    return this.length === 0;
};

String.prototype.padLeft = function (totalLength: number, padChar: string): string {
    const str = String(this);
    const padLen = totalLength - str.length;
    if (padLen <= 0) return str;
    if (!padChar || padChar.length === 0) padChar = ' ';
    let pad = '';
    if (padChar.length === 1) {
        pad = new Array(padLen + 1).join(padChar);
    } else {
        while (pad.length < padLen) {
            pad += padChar;
        }
        pad = pad.slice(0, padLen);
    }
    return pad + str;
};

String.prototype.padRight = function (totalLength: number, padChar: string): string {
    const str = String(this);
    const padLen = totalLength - str.length;
    if (padLen <= 0) return str;
    if (!padChar || padChar.length === 0) padChar = ' ';
    let pad = '';
    if (padChar.length === 1) {
        pad = new Array(padLen + 1).join(padChar);
    } else {
        while (pad.length < padLen) {
            pad += padChar;
        }
        pad = pad.slice(0, padLen);
    }
    return str + pad;
};

String.prototype.capitalize = function (): string {
    const s = String(this);
    if (s.length === 0) return s;
    return s[0].toUpperCase() + s.slice(1);
};

String.prototype.toCamelCase = function (): string {
    const s = String(this).trim();
    return s
        .replace(/[-_\s]+(.)?/g, (_, c: string) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, (c: string) => c.toLowerCase());
};

String.prototype.toPascalCase = function (): string {
    const s = String(this).trim();
    return s
        .replace(/[-_\s]+(.)?/g, (_, c: string) => c ? c.toUpperCase() : '')
        .replace(/^(.)/, (c: string) => c.toUpperCase());
};

String.prototype.toSnakeCase = function (): string {
    return String(this)
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1_$2')
        .replace(/[-\s]+/g, '_')
        .toLowerCase();
};

String.prototype.toKebabCase = function (): string {
    return String(this)
        .trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/[-_\s]+/g, '-')
        .toLowerCase();
};

String.prototype.truncate = function (length: number, suffix = '…'): string {
    const s = String(this);
    if (s.length <= length) return s;
    return s.slice(0, length - suffix.length) + suffix;
};

String.prototype.countOccurrences = function (sub: string): number {
    if (!sub) return 0;
    let count = 0;
    let pos = 0;
    const s = String(this);
    while ((pos = s.indexOf(sub, pos)) !== -1) {
        count++;
        pos += sub.length;
    }
    return count;
};

String.prototype.toSlug = function (): string {
    return String(this)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

String.prototype.words = function (): string[] {
    return String(this).trim().split(/\s+/).filter(w => w.length > 0);
};

String.prototype.isEmail = function (): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(this));
};

String.prototype.isUrl = function (): boolean {
    try {
        new URL(String(this));
        return true;
    } catch {
        return false;
    }
};

String.prototype.reverse = function (): string {
    return String(this).split('').reverse().join('');
};

String.prototype.isPalindrome = function (): boolean {
    const s = String(this).toLowerCase().replace(/[\s-]/g, '');
    return s === s.split('').reverse().join('');
};
