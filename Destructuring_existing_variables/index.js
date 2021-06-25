const fruit = {
	name : "Apple",
	color : "red"
}

let name , color;

({name,color} = fruit)  // Wrap it in a () and everything else just like normal destructuring

console.log(name,color)

// Output:  Apple red