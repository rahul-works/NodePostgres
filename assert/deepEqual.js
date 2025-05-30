const assert = require('node:assert');

const obj1 = {
    a: {
        b: 1,
    },
};

const obj2 = {
    a: {
        b: 2,
    },
};
const obj3 = {
    a: {
        b: 1,
    },
};
const obj4 = { __proto__: obj1 };
console.log(obj1, obj4);
console.log('test1');
assert.deepEqual(obj1, obj1);
// OK

// Values of b are different:
console.log('test2');
assert.deepEqual(obj1, obj2);
// AssertionError: { a: { b: 1 } } deepEqual { a: { b: 2 } }

console.log('test3');
assert.deepEqual(obj1, obj3);
// OK

// Prototypes are ignored:
console.log('test4');
assert.deepEqual(obj1, obj4);
// AssertionError: { a: { b: 1 } } deepEqual {}