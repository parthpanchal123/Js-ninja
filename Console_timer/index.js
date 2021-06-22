console.time("loop-test");

const arr = [];

for (let i = 0; i < 1000000; i++) arr.push(i);

console.timeEnd("loop-test");

// Output : loop-test: 16.992ms    (So easy to time your code now :))
