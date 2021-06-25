const fruit = {
	name : "Apple",
	color : "red"
}

Object.freeze(fruit) // Now this object can't be modified

fruit.name= "Banana" // This will throw an error in strict mode and prevent any nodification

console.log(fruit)

// Output : { name: 'Apple', color: 'red' } (Non-strict mode)