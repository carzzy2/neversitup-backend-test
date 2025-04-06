const { manipulate } = require('./manipulate');

describe('manipulate', () => {
    it('should return an empty array for an empty string', () => {
        expect(manipulate('')).toEqual([]);
    });
    it('should return an array with one element for a single character string', () => {
        expect(manipulate('a')).toEqual(['a']);
    });
    it('should return all unique permutations for a string with unique characters', () => {
        const result = manipulate('abc');
        expect(result).toEqual(expect.arrayContaining(['abc', 'acb', 'bac', 'bca', 'cab', 'cba']));
        expect(result.length).toBe(6);
    });
    it('should return all unique permutations for a string with duplicate characters', () => {
        const result = manipulate('aabb');
        expect(result).toEqual(expect.arrayContaining(['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']));
        expect(result.length).toBe(6);
    });
});
