const { findOddNumber } = require('./odd-number');

describe('findOddNumber', () => {
    test('should return the number that appears an odd number of times', () => {
        expect(findOddNumber([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])).toBe(4);
        expect(findOddNumber([7])).toBe(7);
        expect(findOddNumber([0, 1, 0, 0, 1])).toBe(0);
        expect(findOddNumber([1, 1, 2])).toBe(2);
        expect(findOddNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe(1);
    });

    test('should return undefined if no number appears an odd number of times', () => {
        expect(findOddNumber([1, 1, 2, 2, 3, 3])).toBeUndefined();
    });
});
