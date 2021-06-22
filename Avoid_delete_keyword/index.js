const Car = {
  name: "Ferrari",
  color: "red",
};

delete Car.color; // This is the wrong way to delete a key

console.table(Car);

/*

Output using delete
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│  name   │ 'Ferrari' │
└─────────┴───────────┘

*/

const { color, ...newCar } = Car; // This is the right way to delete a key by using rest operator

console.table(newCar); // The color field will be gone

/*

Output using rest(...) operator
┌─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│  name   │ 'Ferrari' │
└─────────┴───────────┘

*/
