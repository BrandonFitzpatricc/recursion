import { fibs, fibsRec } from "./fibonacci";

test("passing in 0 returns an empty array", () => {
  expect(fibs(0)).toEqual([]);
  expect(fibsRec(0)).toEqual([]);
});

test("passing in 1 returns [0]", () => {
  expect(fibs(1)).toEqual([0]);
  expect(fibsRec(1)).toEqual([0]);
});

test("passing in 2 returns [0, 1]", () => {
  expect(fibs(2)).toEqual([0, 1]);
  expect(fibsRec(2)).toEqual([0, 1]);
});

test("passing in 8 returns [0, 1, 1, 2, 3, 5, 8, 13]", () => {
  expect(fibs(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fibsRec(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
});
