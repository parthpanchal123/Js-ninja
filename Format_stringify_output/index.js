const foo = {
  bar: 12,
  baz: "Something",
};

console.log(JSON.stringify(foo));

// Output : {"bar":12,"baz":"Something"}
// This might not look nicer when the JSON object can be large , so how above giving it some indentation ?

console.log(JSON.stringify(foo, null, 2)); // The 2nd arguement is the replacer function which is null and 3rd arguement is the no of space characters to use

/* Output 
{
  "bar": 12,
  "baz": "Something"
}

Looks nicer right ?
*/
