import { arrElToString } from './jest-test';

describe('arrElToString', () => {
  test('test', () => {
    expect(arrElToString([1, 2, 3])).toStrictEqual(['1', '2', '3']);
  }); 
});
