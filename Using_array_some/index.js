const hasActiveUsers = list.find((user) => user.isActive); 

console.log(Boolean(hasActiveUsers))

// Instead of the above method usign find , you can use the some method as shown below

const hasActiveUsers = list.some((user) => user.isActive);

console.log(hasActiveUsers)

// The output wont differ , but is a much cleaner approach