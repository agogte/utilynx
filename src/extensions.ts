export {};

/**
 * Extends the global `Object` interface with utility methods.
 *
 * @method hasValue
 * Determines if the object has a meaningful value (implementation-specific).
 * @returns {boolean} `true` if the object has a value, otherwise `false`.
 *
 * @method isEmpty
 * Checks if the object is considered empty (implementation-specific).
 * @returns {boolean} `true` if the object is empty, otherwise `false`.
 *
 * @method isNumeric
 * Determines if the object represents a numeric value.
 * @returns {boolean} `true` if the object is numeric, otherwise `false`.
 */

declare global {
    interface Object {
        hasValue(): boolean;
        isEmpty(): boolean;
        isNumeric(): boolean;
    }
}

if (!Object.prototype.hasValue) {
    Object.defineProperty(Object.prototype, 'hasValue', {
        value: function () {
            return this != null;
        },
        enumerable: false,
    });
}

if (!Object.prototype.isEmpty) {
    Object.defineProperty(Object.prototype, 'isEmpty', {
        value: function () {
            if (this == null) return true;
            if (typeof this === 'string' || Array.isArray(this)) return this.length === 0;
            if (typeof this === 'object') return Object.keys(this).length === 0;
            return false;
        },
        enumerable: false,
    });
}

if (!Object.prototype.isNumeric) {
    Object.defineProperty(Object.prototype, 'isNumeric', {
        value: function () {
            const n = +this;
            return typeof n === 'number' && !isNaN(n) && isFinite(n);
        },
        enumerable: false,
    });
}

