export {};

declare global {
  interface Array<T> {
    firstOrDefault(predicate?: (item: T) => boolean): T | undefined;
    groupBy<K extends string | number | symbol>(
      keySelector: (item: T) => K
    ): Record<K, T[]>;
    sum(this: number[]): number | undefined;
    average(this: number[]): number | undefined;
  }
}

// Safely add methods to Array.prototype

if (!Array.prototype.firstOrDefault) {
  Array.prototype.firstOrDefault = function<T>(this: T[], predicate?: (item: T) => boolean): T | undefined {
    if (!Array.isArray(this)) return undefined;
    return predicate ? this.find(predicate) : this[0];
  };
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function<T, K extends string | number | symbol>(
    this: T[],
    keySelector: (item: T) => K
  ): Record<K, T[]> {
    const result: Record<K, T[]> = Object.create(null);
    for (let i = 0, len = this.length; i < len; ++i) {
      const item = this[i];
      const key = keySelector(item);
      if (!result[key]) {
        result[key] = [item];
      } else {
        result[key].push(item);
      }
    }
    return result;
  };
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = this.length; i < len; ++i) {
      total += this[i];
    }
    return total;
  };
}

if (!Array.prototype.average) {
  Array.prototype.average = function(this: number[]): number | undefined {
    if (!Array.isArray(this) || this.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = this.length; i < len; ++i) {
      total += this[i];
    }
    return total / this.length;
  };
}
