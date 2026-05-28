import { merge, mergeSort } from "./merge-sort";

test("[1, 2, 4] and [3, 0] are merged successfully", () => {
  expect(merge([1, 2, 4], [0, 3])).toEqual([0, 1, 2, 3, 4]);
});

test("[4, 5, 6] and [1, 2, 3] are merged successfully", () => {
  expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("empty arrays are merged into an empty array", () => {
  expect(merge([], [])).toEqual([]);
});

test("arrays with negative numbers are merged successfully", () => {
  expect(merge([-4, 5, 6], [-3, -1, 2])).toEqual([-4, -3, -1, 2, 5, 6]);
});

test("single element arrays are merged successfully", () => {
  expect(merge([5], [3])).toEqual([3, 5]);
});

test("[3, 2, 1, 13, 8, 5, 0, 1] is sorted successfully", () => {
  expect(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])).toEqual([
    0, 1, 1, 2, 3, 5, 8, 13,
  ]);
});

test("[105, 79, 100, 110] is sorted successfully", () => {
  expect(mergeSort([105, 79, 100, 110])).toEqual([79, 100, 105, 110]);
});

test("sorted empty array returns an empty array", () => {
  expect(mergeSort([])).toEqual([]);
});

test("single element array is sorted successfully", () => {
  expect(mergeSort([73])).toEqual([73]);
});

test("an array that's already sorted remains sorted", () => {
  expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});
