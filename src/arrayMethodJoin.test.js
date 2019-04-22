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

test(`Should work with '-'`, () => {
  expect(source.join2('-'))
    .toBe('0-1-2-3');
});

test(`Should work with ''`, () => {
  expect(source.join2(''))
    .toBe('0123');
});

test(`Should work with ' '`, () => {
  expect(source.join2(' '))
    .toBe('0 1 2 3');
});

test(`Should have by default ','`, () => {
  expect(source.join2())
    .toBe('0,1,2,3');
});

test(`Should skip undefined when it separator`, () => {
  expect(source.join2(undefined))
    .toBe('0,1,2,3');
});

test(`Should work with null`, () => {
  expect(source.join2(null))
    .toBe('0null1null2null3');
});

test(`Should skip separator when empty array`, () => {
  expect([].join2('-'))
    .toBe('');
});

test(`Should skip separator when array have only one elements`, () => {
  expect([1].join2('-'))
    .toBe('1');
});

test(`Should work when array have null and undefined`, () => {
  expect([false, null, 1, undefined, 0, NaN, ''].join2(','))
    .toBe('false,,1,,0,NaN,');
});

test(`Should work when array have null by first element`, () => {
  expect([null, null, 1, undefined, 0, NaN, ''].join2(','))
    .toBe(',,1,,0,NaN,');
});

test(`Should work with {}`, () => {
  expect(source.join2({}))
    .toBe("0[object Object]1[object Object]2[object Object]3");
});

