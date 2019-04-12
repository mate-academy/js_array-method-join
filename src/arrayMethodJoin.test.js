'use strict';

const applyCustomJoin = require('./arrayMethodJoin');
const source = [0, 1, 2, 3];
applyCustomJoin();

test('join2 is added to [].__proto__', () => {
  expect([].join2)
    .toBeInstanceOf(Function);
});

test(`join2 doesn't call default join`, () => {
  expect([].join2.toString().includes('.join('))
    .toBe(false);
});

test(`join with '-'`, () => {
  expect(source.join2('-'))
    .toBe('0-1-2-3');
});

test(`join with ''`, () => {
  expect(source.join2(''))
    .toBe('0123');
});

test(`join with ',' by default`, () => {
  expect(source.join2())
    .toBe('0,1,2,3');
});

test(`join with ',' by default`, () => {
  expect(source.join2(undefined))
    .toBe('0,1,2,3');
});

test(`join with null`, () => {
  expect(source.join2(null))
    .toBe('0null1null2null3');
});

test(`join []`, () => {
  expect([].join2('-'))
    .toBe('');
});

test(`join [1]`, () => {
  expect([1].join2('-'))
    .toBe('1');
});

test(`for [false, null, 1, undefined, 0, NaN, ''].join(',')`, () => {
  expect([false, null, 1, undefined, 0, NaN, ''].join2(','))
    .toBe('false,,1,,0,NaN,');
});
