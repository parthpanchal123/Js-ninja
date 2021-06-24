const createFruit = (name, color) => {};

createFruit("Apple", "red"); // Doing this can be easy when there are less number of arguements , however can be difficult to read and keep a track .

// Therefore instead of plain arguements , pass them as an object as shown below
// This will also provide intellisense and also the order doesn't matter anymore':)

const createNewFruit = ({ name, color }) => {};

createNewFruit({ name: "Banana", color: "yellow" });
