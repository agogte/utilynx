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
