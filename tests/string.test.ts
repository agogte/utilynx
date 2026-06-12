import '../src/string';

describe('String.prototype.isNullOrEmpty', () => {
  it('returns true for empty string', () => {
    expect(''.isNullOrEmpty()).toBe(true);
  });
  it('returns false for non-empty string', () => {
    expect('abc'.isNullOrEmpty()).toBe(false);
  });
});

describe('String.prototype.padLeft', () => {
  it('pads string on the left', () => {
    expect('abc'.padLeft(5, '0')).toBe('00abc');
  });
  it('returns original if already long enough', () => {
    expect('abc'.padLeft(2, '0')).toBe('abc');
  });
});

describe('String.prototype.padRight', () => {
  it('pads string on the right', () => {
    expect('abc'.padRight(5, '0')).toBe('abc00');
  });
  it('returns original if already long enough', () => {
    expect('abc'.padRight(2, '0')).toBe('abc');
  });
});

describe('String.prototype.capitalize', () => {
  it('uppercases first letter', () => {
    expect('hello'.capitalize()).toBe('Hello');
  });
  it('handles already capitalized', () => {
    expect('Hello'.capitalize()).toBe('Hello');
  });
  it('handles empty string', () => {
    expect(''.capitalize()).toBe('');
  });
});

describe('String.prototype.toCamelCase', () => {
  it('converts snake_case to camelCase', () => {
    expect('hello_world'.toCamelCase()).toBe('helloWorld');
  });
  it('converts kebab-case to camelCase', () => {
    expect('hello-world'.toCamelCase()).toBe('helloWorld');
  });
  it('converts spaced words to camelCase', () => {
    expect('hello world'.toCamelCase()).toBe('helloWorld');
  });
});

describe('String.prototype.toPascalCase', () => {
  it('converts snake_case to PascalCase', () => {
    expect('hello_world'.toPascalCase()).toBe('HelloWorld');
  });
  it('converts kebab-case to PascalCase', () => {
    expect('hello-world'.toPascalCase()).toBe('HelloWorld');
  });
});

describe('String.prototype.toSnakeCase', () => {
  it('converts camelCase to snake_case', () => {
    expect('helloWorld'.toSnakeCase()).toBe('hello_world');
  });
  it('converts spaces to underscores', () => {
    expect('hello world'.toSnakeCase()).toBe('hello_world');
  });
  it('converts PascalCase to snake_case', () => {
    expect('HelloWorld'.toSnakeCase()).toBe('hello_world');
  });
});

describe('String.prototype.toKebabCase', () => {
  it('converts camelCase to kebab-case', () => {
    expect('helloWorld'.toKebabCase()).toBe('hello-world');
  });
  it('converts spaces to hyphens', () => {
    expect('hello world'.toKebabCase()).toBe('hello-world');
  });
  it('converts PascalCase to kebab-case', () => {
    expect('HelloWorld'.toKebabCase()).toBe('hello-world');
  });
});

describe('String.prototype.truncate', () => {
  it('truncates with default ellipsis', () => {
    expect('hello world'.truncate(8)).toBe('hello w…');
  });
  it('uses custom suffix', () => {
    expect('hello world'.truncate(8, '...')).toBe('hello...');
  });
  it('returns original if within length', () => {
    expect('hi'.truncate(10)).toBe('hi');
  });
});

describe('String.prototype.countOccurrences', () => {
  it('counts substring occurrences', () => {
    expect('abcabc'.countOccurrences('a')).toBe(2);
  });
  it('returns 0 when not found', () => {
    expect('hello'.countOccurrences('z')).toBe(0);
  });
  it('returns 0 for empty substring', () => {
    expect('hello'.countOccurrences('')).toBe(0);
  });
});

describe('String.prototype.toSlug', () => {
  it('converts to URL-friendly slug', () => {
    expect('Hello World!'.toSlug()).toBe('hello-world');
  });
  it('handles multiple spaces', () => {
    expect('foo  bar'.toSlug()).toBe('foo-bar');
  });
  it('strips special characters', () => {
    expect('Héllo@World'.toSlug()).toBe('hlloworld');
  });
});

describe('String.prototype.words', () => {
  it('splits into words', () => {
    expect('foo bar baz'.words()).toEqual(['foo', 'bar', 'baz']);
  });
  it('handles multiple spaces', () => {
    expect('foo   bar'.words()).toEqual(['foo', 'bar']);
  });
  it('returns empty for blank string', () => {
    expect(''.words()).toEqual([]);
  });
});

describe('String.prototype.isEmail', () => {
  it('returns true for valid email', () => {
    expect('user@example.com'.isEmail()).toBe(true);
  });
  it('returns false for invalid email', () => {
    expect('notanemail'.isEmail()).toBe(false);
    expect('@missing.com'.isEmail()).toBe(false);
  });
});

describe('String.prototype.isUrl', () => {
  it('returns true for valid URL', () => {
    expect('https://example.com'.isUrl()).toBe(true);
    expect('http://foo.bar/path?q=1'.isUrl()).toBe(true);
  });
  it('returns false for invalid URL', () => {
    expect('not-a-url'.isUrl()).toBe(false);
    expect('ftp//missing-colon'.isUrl()).toBe(false);
  });
});

describe('String.prototype.reverse', () => {
  it('reverses a string', () => {
    expect('abc'.reverse()).toBe('cba');
  });
  it('handles empty string', () => {
    expect(''.reverse()).toBe('');
  });
  it('handles palindrome', () => {
    expect('racecar'.reverse()).toBe('racecar');
  });
});

describe('String.prototype.isPalindrome', () => {
  it('returns true for palindromes', () => {
    expect('racecar'.isPalindrome()).toBe(true);
    expect('A man a plan a canal Panama'.isPalindrome()).toBe(true);
  });
  it('is case-insensitive', () => {
    expect('Racecar'.isPalindrome()).toBe(true);
  });
  it('returns false for non-palindromes', () => {
    expect('hello'.isPalindrome()).toBe(false);
  });
  it('handles empty string', () => {
    expect(''.isPalindrome()).toBe(true);
  });
});
