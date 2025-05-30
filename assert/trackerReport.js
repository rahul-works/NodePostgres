const assert = require('node:assert');

// Creates call tracker.
const tracker = new assert.CallTracker();

function func() { }

// Returns a function that wraps func() that must be called exact times
// before tracker.verify().
const callsfunc = tracker.calls(func, 2);

// Returns an array containing information on callsfunc()
console.log(tracker.report());