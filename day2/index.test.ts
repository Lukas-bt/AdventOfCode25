import { main } from './index';

describe('Day 2', () => {
    it('should return 3 for the test case', () => {
        const result = main("./day2/test.txt");
        expect(result).toBe(1227775554);
    });
});