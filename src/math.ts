export {};

declare global {
  interface Number {
    isEven(): boolean;
    isOdd(): boolean;
    sqrt(): number;
    round(precision?: number): number;
  }
}

if (!Number.prototype.isEven) {
  Number.prototype.isEven = function (): boolean {
    return (this.valueOf() & 1) === 0;
  };
}

if (!Number.prototype.isOdd) {
  Number.prototype.isOdd = function (): boolean {
    return (this.valueOf() & 1) === 1;
  };
}

if (!Number.prototype.sqrt) {
  Number.prototype.sqrt = function (): number {
    return Math.sqrt(this.valueOf());
  };
}

if (!Number.prototype.round) {
  Number.prototype.round = function (precision = 0): number {
    const multiplier = Math.pow(10, precision);
    return Math.round((this.valueOf() + Number.EPSILON) * multiplier) / multiplier;
  };
}
