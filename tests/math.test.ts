import '../src/math'

describe('Number.prototype.sqrt', () => {
  it('returns correct square root', () => {
    expect((9).sqrt()).toBe(3);
    expect((0).sqrt()).toBe(0);
  });
});

describe('Number.prototype.round', () => {
  it('rounds to nearest integer by default', () => {
    expect((2.5).round()).toBe(3);
    expect((-2.5).round()).toBe(-2);
  });
  it('rounds to given precision', () => {
    expect((2.3456).round(2)).toBe(2.35);
    expect((2.344).round(2)).toBe(2.34);
  });
});

describe('Number.prototype.isEven', () => {
  it('returns true for even numbers', () => {
    expect((2).isEven()).toBe(true);
    expect((0).isEven()).toBe(true);
  });
  it('returns false for odd numbers', () => {
    expect((3).isEven()).toBe(false);
  });
});

describe('Number.prototype.isOdd', () => {
  it('returns true for odd numbers', () => {
    expect((3).isOdd()).toBe(true);
  });
  it('returns false for even numbers', () => {
    expect((4).isOdd()).toBe(false);
  });
});

describe('Number.prototype.clamp', () => {
  it('clamps to max when above range', () => {
    expect((150).clamp(0, 100)).toBe(100);
  });
  it('clamps to min when below range', () => {
    expect((-10).clamp(0, 100)).toBe(0);
  });
  it('returns value when within range', () => {
    expect((50).clamp(0, 100)).toBe(50);
  });
});

describe('Number.prototype.abs', () => {
  it('returns absolute value of negative number', () => {
    expect((-5).abs()).toBe(5);
  });
  it('returns same value for positive number', () => {
    expect((5).abs()).toBe(5);
  });
  it('returns 0 for zero', () => {
    expect((0).abs()).toBe(0);
  });
});

describe('Number.prototype.between', () => {
  it('returns true when within range (inclusive)', () => {
    expect((5).between(1, 10)).toBe(true);
    expect((1).between(1, 10)).toBe(true);
    expect((10).between(1, 10)).toBe(true);
  });
  it('returns false when outside range', () => {
    expect((0).between(1, 10)).toBe(false);
    expect((11).between(1, 10)).toBe(false);
  });
});

describe('Number.prototype.pow', () => {
  it('raises to given power', () => {
    expect((2).pow(8)).toBe(256);
    expect((3).pow(3)).toBe(27);
  });
  it('handles exponent of 0', () => {
    expect((5).pow(0)).toBe(1);
  });
});

describe('Number.prototype.floor', () => {
  it('floors the number', () => {
    expect((3.7).floor()).toBe(3);
    expect((-3.2).floor()).toBe(-4);
  });
});

describe('Number.prototype.ceil', () => {
  it('ceils the number', () => {
    expect((3.2).ceil()).toBe(4);
    expect((-3.7).ceil()).toBe(-3);
  });
});

describe('Number.prototype.toOrdinal', () => {
  it('adds st for 1, 21, 31', () => {
    expect((1).toOrdinal()).toBe('1st');
    expect((21).toOrdinal()).toBe('21st');
  });
  it('adds nd for 2, 22', () => {
    expect((2).toOrdinal()).toBe('2nd');
    expect((22).toOrdinal()).toBe('22nd');
  });
  it('adds rd for 3, 23', () => {
    expect((3).toOrdinal()).toBe('3rd');
    expect((23).toOrdinal()).toBe('23rd');
  });
  it('adds th for 4-20 and 11-13', () => {
    expect((4).toOrdinal()).toBe('4th');
    expect((11).toOrdinal()).toBe('11th');
    expect((12).toOrdinal()).toBe('12th');
    expect((13).toOrdinal()).toBe('13th');
  });
});

describe('Number.prototype.percentage', () => {
  it('calculates percentage of total', () => {
    expect((45).percentage(200)).toBe(22.5);
    expect((50).percentage(100)).toBe(50);
  });
  it('returns 0 when total is 0', () => {
    expect((5).percentage(0)).toBe(0);
  });
});

describe('Number.prototype.sign', () => {
  it('returns -1 for negative numbers', () => {
    expect((-42).sign()).toBe(-1);
  });
  it('returns 1 for positive numbers', () => {
    expect((42).sign()).toBe(1);
  });
  it('returns 0 for zero', () => {
    expect((0).sign()).toBe(0);
  });
});
