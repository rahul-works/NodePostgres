const assert = require('node:assert/strict');

console.log('test1');
// This fails because 1 !== '1'.
assert.deepStrictEqual({ a: 1 }, { a: '1' });
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
//   {
// +   a: 1
// -   a: '1'
//   }

// The following objects don't have own properties
const date = new Date();
const object = {};
const fakeDate = {};
console.log('test2');
Object.setPrototypeOf(fakeDate, Date.prototype);


// Different [[Prototype]]:
console.log('test3');
assert.deepStrictEqual(object, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + {}
// - Date {}

// Different type tags:
console.log('test4');
assert.deepStrictEqual(date, fakeDate);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 2018-04-26T00:49:08.604Z
// - Date {}

console.log('test5');
assert.deepStrictEqual(NaN, NaN);
// OK because Object.is(NaN, NaN) is true.

// Different unwrapped numbers:
console.log('test6');
assert.deepStrictEqual(new Number(1), new Number(2));
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + [Number: 1]
// - [Number: 2]

console.log('test7');
assert.deepStrictEqual(new String('foo'), Object('foo'));
// OK because the object and the string are identical when unwrapped.

console.log('test8');
assert.deepStrictEqual(-0, -0);
// OK

// Different zeros:
console.log('test9');
assert.deepStrictEqual(0, -0);
// AssertionError: Expected inputs to be strictly deep-equal:
// + actual - expected
//
// + 0
// - -0

const symbol1 = Symbol();
const symbol2 = Symbol();
console.log('test10');
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol1]: 1 });
// OK, because it is the same symbol on both objects.
console.log('test11');
assert.deepStrictEqual({ [symbol1]: 1 }, { [symbol2]: 1 });
// AssertionError [ERR_ASSERTION]: Inputs identical but not reference equal:
//
// {
//   Symbol(): 1
// }

const weakMap1 = new WeakMap();
const weakMap2 = new WeakMap();
const obj = {};

weakMap1.set(obj, 'value');
weakMap2.set(obj, 'value');

// Comparing different instances fails, even with same contents
console.log('test12');
assert.deepStrictEqual(weakMap1, weakMap2);
// AssertionError: Values have same structure but are not reference-equal:
//
// WeakMap {
//   <items unknown>
// }

// Comparing the same instance to itself succeeds
console.log('test13');
assert.deepStrictEqual(weakMap1, weakMap1);
// OK

const weakSet1 = new WeakSet();
const weakSet2 = new WeakSet();
weakSet1.add(obj);
weakSet2.add(obj);

// Comparing different instances fails, even with same contents
console.log('test14');
assert.deepStrictEqual(weakSet1, weakSet2);
// AssertionError: Values have same structure but are not reference-equal:
// + actual - expected
//
// WeakSet {
//   <items unknown>
// }

// Comparing the same instance to itself succeeds
console.log('test15');
assert.deepStrictEqual(weakSet1, weakSet1);
// OK