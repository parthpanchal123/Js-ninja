const evenNumbersSquared = [1, 2, 3, 4, 5, 6].map((no) => {
  if (no % 2 !== 0) {
    return null;
  }
  return no * no;
});

console.log(evenNumbersSquared);

// Output : [ null, 4, null, 16, null, 36 ]

// What if we just want [4,16,36] , add a falsy bouncer as show below

const modifiedEvens = [1, 2, 3, 4, 5, 6]
  .map((no) => {
    if (no % 2 !== 0) {
      return null;
    }
    return no * no;
  })
  .filter(Boolean); // filter will get rid of all the falsies .

console.log(modifiedEvens);

// Output : [ 4, 16, 36 ]
