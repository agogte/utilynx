/**
 * Groups the elements of an array according to a specified key selector function.
*
* @template T - The type of elements in the input array.
* @template K - The type of the key returned by the key selector (must be string, number, or symbol).
* @param array - The array of items to group.
* @param keySelector - A function that takes an item and returns its grouping key.
* @returns An object whose keys are the group identifiers and whose values are arrays of items in each group.
*
* @example
* ```typescript
* const data = [
*   { type: 'fruit', name: 'apple' },
*   { type: 'vegetable', name: 'carrot' },
*   { type: 'fruit', name: 'banana' }
* ];
* const grouped = groupBy(data, item => item.type);
* // grouped = {
* //   fruit: [{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }],
* //   vegetable: [{ type: 'vegetable', name: 'carrot' }]
* // }
* ```
*/

export function firstOrDefault<T>(arr: T[], predicate?: (item: T) => boolean): T | undefined {
  if (!Array.isArray(arr)) return undefined;
  return predicate ? arr.find(predicate) : arr[0];
}
export function groupBy<T, K extends string | number | symbol>(
    array: T[],
    keySelector: (item: T) => K
): Record<K, T[]> {
    const result = Object.create(null) as Record<K, T[]>;
    for (let i = 0, len = array.length; i < len; ++i) {
        const item = array[i];
        const key = keySelector(item);
        if (result[key] === undefined) {
            result[key] = [item];
        } else {
            result[key].push(item);
        }
    }
    return result;
}

export function sum(arr: number[]): number | undefined {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = arr.length; i < len; ++i) {
        total += arr[i];
    }
    return total;
}

export function average(arr: number[]): number | undefined {
    if (!Array.isArray(arr) || arr.length === 0) return undefined;
    let total = 0;
    for (let i = 0, len = arr.length; i < len; ++i) {
        total += arr[i];
    }
    return total / arr.length;
}
