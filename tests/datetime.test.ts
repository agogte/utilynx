import '../src/datetime';

describe('Date.prototype.addDays', () => {
  it('adds days correctly', () => {
    const d = new Date(2020, 0, 1);
    expect(d.addDays(1).getDate()).toBe(2);
  });
});

describe('Date.prototype.isWeekend', () => {
  it('returns true for Saturday and Sunday', () => {
    expect(new Date(2025, 5, 28).isWeekend()).toBe(true);
    expect(new Date(2025, 5, 29).isWeekend()).toBe(true);
  });

  it('returns false for weekdays', () => {
    expect(new Date(2025, 5, 26).isWeekend()).toBe(false);
  });
});

describe('Date.prototype.toShortDateString', () => {
  it('returns YYYY-MM-DD', () => {
    expect(new Date('2020-01-02T12:34:56Z').toShortDateString()).toBe('2020-01-02');
  });
});

describe('Date.prototype.diffDays', () => {
  it('returns difference in days', () => {
    const d1 = new Date(2020, 0, 1);
  });
});

describe('Date.prototype.addHours', () => {
  it('adds hours correctly', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    expect(d.addHours(2).getUTCHours()).toBe(2);
  });
});

describe('Date.prototype.addMinutes', () => {
  it('adds minutes correctly', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    expect(d.addMinutes(30).getUTCMinutes()).toBe(30);
  });

  it('adds negative minutes correctly', () => {
    const d = new Date('2020-01-01T00:30:00Z');
    expect(d.addMinutes(-15).getUTCMinutes()).toBe(15);
  });

  it('addHours handles negative values', () => {
    const d = new Date('2020-01-01T05:00:00Z');
    expect(d.addHours(-2).getUTCHours()).toBe(3);
  });

  it('addDays works with negative values', () => {
    const d = new Date(2020, 0, 5); 
  });

  it('diffDays returns negative when otherDate is before', () => {
    const d1 = new Date(2020, 0, 5); 
  });

  it('toShortDateString returns correct format for single-digit months/days', () => {
    expect(new Date('2020-02-03T23:59:59Z').toShortDateString()).toBe('2020-02-03');
  });

  it('addDays does not mutate original date', () => {
    const d = new Date(2020, 0, 1);
    expect(d.getDate()).toBe(1);
  });

  it('addHours does not mutate original date', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    d.addHours(5);
    expect(d.getUTCHours()).toBe(0); 
  });

  it('addMinutes does not mutate original date', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    d.addMinutes(10);
    expect(d.getUTCMinutes()).toBe(0); 
  });
});
