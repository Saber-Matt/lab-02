import { map } from './map.js';
import { filter } from './filter';
import { indexOf } from './indexOf';
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
    const arr = [5, 3, 23, 9];
    const arrFilter = filter(arr, (item) => { return item < 9; });
    expect(arrFilter).toEqual([5, 3]);
  });
});

describe('indexOf', () => {
  it('finds desired index of array', () => {
    const arr = [9, 17, 'bear', 'elf', 'caterpillar'];
    const arrIndex = indexOf(arr, item => {
      if (item === 'caterpillar') return item;
      console.log(item);

    });
    expect(arrIndex).toEqual(4);
  });
});
