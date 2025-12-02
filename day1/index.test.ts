import { main } from './index';

describe('Day 1', () => {
    it('should return 3 for the test case', () => {
        const result = main('./test.txt');
        expect(result).toBe(3);
    });
});