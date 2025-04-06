const { countSmilyFace } = require('./smily');

describe('countSmilyFace', () => {
    it('should count the number of smiley faces correctly', () => {
        const input = [':)', ':(', ':D', ':-)', ';~D', ':-D', ';-D', ':-(', ';-(', ':>'];
        const result = countSmilyFace(input);
        expect(result).toBe(6);
    });

    it('should return 0 for an empty array', () => {
        const input = [];
        const result = countSmilyFace(input);
        expect(result).toBe(0);
    });

    it('should return 0 for an array with no smily faces', () => {
        const input = [':(', ':>', ':|', ':o', ';-(', ';>'];
        const result = countSmilyFace(input);
        expect(result).toBe(0);
    });

    it('should count smily faces with and without noses', () => {
        const input = [':)', ':-)', ';)', ';-)'];
        const result = countSmilyFace(input);
        expect(result).toBe(4);
    });
});
