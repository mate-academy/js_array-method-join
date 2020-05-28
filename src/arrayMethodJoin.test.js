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

test(`Should work with special character as a separator`, () => {
  expect(source.join2('-'))
    .toBe('0-1-2-3');
});

test(`Should work with empty string as a separator`, () => {
  expect(source.join2(''))
    .toBe('0123');
});

test(`Should work with whitespace as a separator`, () => {
  expect(source.join2(' '))
    .toBe('0 1 2 3');
});

test(`Should use comma if separator is not specified`, () => {
  expect(source.join2())
    .toBe('0,1,2,3');
});

test(`Should use comma if undefined is passed as a separator`, () => {
  expect(source.join2(undefined))
    .toBe('0,1,2,3');
});

test(`Should work with null`, () => {
  expect(source.join2(null))
    .toBe('0null1null2null3');
});

test(`Should return empty string when called for empty array`, () => {
  expect([].join2('-'))
    .toBe('');
});

test(`Should skip separator when array has only one element`, () => {
  expect([1].join2('-'))
    .toBe('1');
});

test(`Should work when array have null and undefined`, () => {
  expect([false, null, 1, undefined, 0, NaN, ''].join2(','))
    .toBe('false,,1,,0,NaN,');
});

test(`Should work when array has null as a first element`, () => {
  expect([null, null, 1, undefined, 0, NaN, ''].join2(','))
    .toBe(',,1,,0,NaN,');
});

test(`Should work with object as a separator`, () => {
  expect(source.join2({}))
    .toBe('0[object Object]1[object Object]2[object Object]3');
});
