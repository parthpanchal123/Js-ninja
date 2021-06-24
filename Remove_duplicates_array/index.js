const numbers = [1, 2, 2, 3, 4, 5, 6, 7, 7, 7, 8, 8, 9, 10];

const distinct_array = [...new Set(numbers)]; // ... is the spread operator and set have a unique property to not allow duplicates

console.log(distinct_array);

/*
 Output : 

[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]


*/
