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

describe('Date.prototype.addHours', () => {
  it('adds hours correctly', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    expect(d.addHours(2).getUTCHours()).toBe(2);
  });
  it('handles negative values', () => {
    const d = new Date('2020-01-01T05:00:00Z');
    expect(d.addHours(-2).getUTCHours()).toBe(3);
  });
  it('does not mutate original', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    d.addHours(5);
    expect(d.getUTCHours()).toBe(0);
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
  it('does not mutate original', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    d.addMinutes(10);
    expect(d.getUTCMinutes()).toBe(0);
  });
});

describe('Date.prototype.addSeconds', () => {
  it('adds seconds correctly', () => {
    const d = new Date('2020-01-01T00:00:00Z');
    expect(d.addSeconds(45).getUTCSeconds()).toBe(45);
  });
  it('handles negative values', () => {
    const d = new Date('2020-01-01T00:01:00Z');
    expect(d.addSeconds(-30).getUTCSeconds()).toBe(30);
  });
});

describe('Date.prototype.addMilliseconds', () => {
  it('adds milliseconds correctly', () => {
    const d = new Date('2020-01-01T00:00:00.000Z');
    expect(d.addMilliseconds(500).getUTCMilliseconds()).toBe(500);
  });
});

describe('Date.prototype.addMonths', () => {
  it('adds months correctly', () => {
    const d = new Date(2020, 0, 15);
    expect(d.addMonths(2).getMonth()).toBe(2);
  });
  it('handles year rollover', () => {
    const d = new Date(2020, 11, 1);
    expect(d.addMonths(2).getFullYear()).toBe(2021);
    expect(d.addMonths(2).getMonth()).toBe(1);
  });
  it('handles negative months', () => {
    const d = new Date(2020, 5, 15);
    expect(d.addMonths(-3).getMonth()).toBe(2);
  });
});

describe('Date.prototype.addYears', () => {
  it('adds years correctly', () => {
    const d = new Date(2020, 0, 1);
    expect(d.addYears(3).getFullYear()).toBe(2023);
  });
  it('handles negative years', () => {
    const d = new Date(2020, 0, 1);
    expect(d.addYears(-5).getFullYear()).toBe(2015);
  });
});

describe('Date.prototype.startOfDay', () => {
  it('sets time to 00:00:00.000', () => {
    const d = new Date(2024, 5, 15, 14, 30, 45, 123);
    const start = d.startOfDay();
    expect(start.getHours()).toBe(0);
    expect(start.getMinutes()).toBe(0);
    expect(start.getSeconds()).toBe(0);
    expect(start.getMilliseconds()).toBe(0);
    expect(start.getDate()).toBe(15);
  });
  it('does not mutate original', () => {
    const d = new Date(2024, 5, 15, 14, 30);
    d.startOfDay();
    expect(d.getHours()).toBe(14);
  });
});

describe('Date.prototype.endOfDay', () => {
  it('sets time to 23:59:59.999', () => {
    const d = new Date(2024, 5, 15, 8, 0, 0);
    const end = d.endOfDay();
    expect(end.getHours()).toBe(23);
    expect(end.getMinutes()).toBe(59);
    expect(end.getSeconds()).toBe(59);
    expect(end.getMilliseconds()).toBe(999);
  });
});

describe('Date.prototype.startOfMonth', () => {
  it('returns first day of month at midnight', () => {
    const d = new Date(2024, 5, 15, 12, 0, 0);
    const start = d.startOfMonth();
    expect(start.getDate()).toBe(1);
    expect(start.getMonth()).toBe(5);
    expect(start.getHours()).toBe(0);
  });
});

describe('Date.prototype.endOfMonth', () => {
  it('returns last day of month at end of day', () => {
    const d = new Date(2024, 1, 10);
    const end = d.endOfMonth();
    expect(end.getDate()).toBe(29);
    expect(end.getHours()).toBe(23);
    expect(end.getMinutes()).toBe(59);
  });
});

describe('Date.prototype.isBefore', () => {
  it('returns true when date is earlier', () => {
    const d1 = new Date(2020, 0, 1);
    const d2 = new Date(2020, 0, 2);
    expect(d1.isBefore(d2)).toBe(true);
  });
  it('returns false when date is later', () => {
    const d1 = new Date(2020, 0, 2);
    const d2 = new Date(2020, 0, 1);
    expect(d1.isBefore(d2)).toBe(false);
  });
});

describe('Date.prototype.isAfter', () => {
  it('returns true when date is later', () => {
    const d1 = new Date(2020, 0, 2);
    const d2 = new Date(2020, 0, 1);
    expect(d1.isAfter(d2)).toBe(true);
  });
  it('returns false when date is earlier', () => {
    const d1 = new Date(2020, 0, 1);
    const d2 = new Date(2020, 0, 2);
    expect(d1.isAfter(d2)).toBe(false);
  });
});

describe('Date.prototype.isSameDay', () => {
  it('returns true for same calendar day', () => {
    const d1 = new Date(2024, 5, 15, 8, 0);
    const d2 = new Date(2024, 5, 15, 22, 59);
    expect(d1.isSameDay(d2)).toBe(true);
  });
  it('returns false for different days', () => {
    const d1 = new Date(2024, 5, 15);
    const d2 = new Date(2024, 5, 16);
    expect(d1.isSameDay(d2)).toBe(false);
  });
});

describe('Date.prototype.isWeekday', () => {
  it('returns true for Monday through Friday', () => {
    expect(new Date(2025, 5, 23).isWeekday()).toBe(true); // Monday
    expect(new Date(2025, 5, 27).isWeekday()).toBe(true); // Friday
  });
  it('returns false for Saturday and Sunday', () => {
    expect(new Date(2025, 5, 28).isWeekday()).toBe(false); // Saturday
    expect(new Date(2025, 5, 29).isWeekday()).toBe(false); // Sunday
  });
});

describe('Date.prototype.toRelativeString', () => {
  it('returns "just now" for very recent dates', () => {
    const d = new Date(Date.now() - 5000);
    expect(d.toRelativeString()).toBe('just now');
  });
  it('returns minutes ago', () => {
    const d = new Date(Date.now() - 2 * 60 * 1000);
    expect(d.toRelativeString()).toBe('2 minutes ago');
  });
  it('returns in X hours for future date', () => {
    const d = new Date(Date.now() + 3 * 60 * 60 * 1000);
    expect(d.toRelativeString()).toBe('in 3 hours');
  });
  it('returns singular for 1 unit', () => {
    const d = new Date(Date.now() - 60 * 1000);
    expect(d.toRelativeString()).toBe('1 minute ago');
  });
});

describe('Date.prototype.diffHours', () => {
  it('calculates hours difference', () => {
    const d1 = new Date('2024-01-01T00:00:00Z');
    const d2 = new Date('2024-01-01T05:30:00Z');
    expect(d1.diffHours(d2)).toBe(5);
  });
});

describe('Date.prototype.diffMinutes', () => {
  it('calculates minutes difference', () => {
    const d1 = new Date('2024-01-01T00:00:00Z');
    const d2 = new Date('2024-01-01T00:45:00Z');
    expect(d1.diffMinutes(d2)).toBe(45);
  });
});

describe('Date.prototype.weekNumber', () => {
  it('returns correct ISO week number', () => {
    expect(new Date(2024, 0, 1).weekNumber()).toBe(1);
    expect(new Date(2024, 0, 7).weekNumber()).toBe(1);
    expect(new Date(2024, 0, 8).weekNumber()).toBe(2);
  });
});

describe('Date.prototype.format', () => {
  it('formats with YYYY-MM-DD pattern', () => {
    const d = new Date(2024, 0, 5, 3, 7, 9);
    expect(d.format('YYYY-MM-DD')).toBe('2024-01-05');
  });
  it('formats with DD/MM/YYYY pattern', () => {
    const d = new Date(2024, 0, 5);
    expect(d.format('DD/MM/YYYY')).toBe('05/01/2024');
  });
  it('formats time components', () => {
    const d = new Date(2024, 0, 5, 3, 7, 9);
    expect(d.format('HH:mm:ss')).toBe('03:07:09');
  });
});
