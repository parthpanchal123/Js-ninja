// While developing , you might access null members and try debugging by console logging keys , in such times console.group can be handy

const User = {
  name: "John",
  age: 43,
  profession: "Software Engineer",
  hobbies: ["reading", "painting"],
};

console.group("User");

console.log(User.name);
console.log(User.age);
console.log(User.hobbies[1]);

console.groupEnd("User");

/*
It prints the fields with an indentation that makes it easier to interpret
User
  John
  43
  painting

*/
