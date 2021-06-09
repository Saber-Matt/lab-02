import { map } from './map.js';
import { filter } from './filter';

describe(map, () => {
  it('generate new arr like .map does', () => {
    const arr = [5, 7, 23, 9];
    const arrMap = map(arr, (item) => {
      return -item;

    });

    expect(arrMap).toEqual([-5, -7, -23, -9]);
  });
});

describe(filter, () => {
  it('performs a filter function', () => {
    const arr = [5, 7, 23, 9];
    const arrFilter = filter(arr, (item) => { return item < 9; });
    expect(arrFilter).toEqual([5, 7]);
  });
});
