// Method 1 : Using the Array constructor

const arr = new Array(10).fill('foo');

// Method 2 : Using the Array constructor + Map method

const arr = new Array(10)
const filledArr = [...arr].map(() => 'foo')

// Method 3 : Using the Array constructor

const arr = Array.from({length : 10},() => 'foo'); // Star the repo if you didn't know about this (I bet you didn't)


