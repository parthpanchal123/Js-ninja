// Did you know the JSON.stringify also takes in a second optional arguement which is the replacer function

const foo = {
  bar: 12,
  baz: "Something",
};

const replacer = (key, value) => (key == "bar" ? value * 2 : value); // You can apply any custom logic here

const res = JSON.stringify(foo, replacer); // The replacer function passed in as 2nd arguement

console.log(res);
