// Different methods to use checking of functions before executing them
// Using short-circuit method 

someFunction && someFunction()

// Using conditional checking

if(someFunction){
	someFunction();
}

// Using optional chaining

someFunction?.()