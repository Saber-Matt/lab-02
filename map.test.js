import { map } from './map.js';

describe(map, () => {
  it('generate new arr like .map does', () => {
    const arr = [5, 7, 23, 9];
    const arrMap = map(arr, (item) => {
      return -item;

    });

    expect(arrMap).toEqual([-5, -7, -23, -9]);
  });
});
