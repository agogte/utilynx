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
        deepClone(): this;
        pick(...keys: string[]): Record<string, unknown>;
        omit(...keys: string[]): Record<string, unknown>;
        deepEqual(other: unknown): boolean;
        mapValues(fn: (value: unknown, key: string) => unknown): Record<string, unknown>;
        toArray(): { key: string; value: unknown }[];
        path(dotPath: string): unknown;
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

if (!Object.prototype.deepClone) {
    Object.defineProperty(Object.prototype, 'deepClone', {
        value: function () {
            return structuredClone(this);
        },
        enumerable: false,
    });
}

if (!Object.prototype.pick) {
    Object.defineProperty(Object.prototype, 'pick', {
        value: function (...keys: string[]): Record<string, unknown> {
            const result: Record<string, unknown> = {};
            for (const key of keys) {
                if (key in this) result[key] = this[key];
            }
            return result;
        },
        enumerable: false,
    });
}

if (!Object.prototype.omit) {
    Object.defineProperty(Object.prototype, 'omit', {
        value: function (...keys: string[]): Record<string, unknown> {
            const exclude = new Set(keys);
            const result: Record<string, unknown> = {};
            for (const key of Object.keys(this)) {
                if (!exclude.has(key)) result[key] = this[key];
            }
            return result;
        },
        enumerable: false,
    });
}

if (!Object.prototype.deepEqual) {
    Object.defineProperty(Object.prototype, 'deepEqual', {
        value: function (other: unknown): boolean {
            return JSON.stringify(this) === JSON.stringify(other);
        },
        enumerable: false,
    });
}

if (!Object.prototype.mapValues) {
    Object.defineProperty(Object.prototype, 'mapValues', {
        value: function (fn: (value: unknown, key: string) => unknown): Record<string, unknown> {
            const result: Record<string, unknown> = {};
            for (const key of Object.keys(this)) {
                result[key] = fn(this[key], key);
            }
            return result;
        },
        enumerable: false,
    });
}

if (!Object.prototype.toArray) {
    Object.defineProperty(Object.prototype, 'toArray', {
        value: function (): { key: string; value: unknown }[] {
            return Object.entries(this).map(([key, value]) => ({ key, value }));
        },
        enumerable: false,
    });
}

if (!Object.prototype.path) {
    Object.defineProperty(Object.prototype, 'path', {
        value: function (dotPath: string): unknown {
            return dotPath.split('.').reduce((acc: unknown, key: string) => {
                if (acc == null) return undefined;
                return (acc as Record<string, unknown>)[key];
            }, this);
        },
        enumerable: false,
    });
}
