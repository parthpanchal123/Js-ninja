// Stop making if conditional checks to make sure something is not null, instead use console.assert for logging

const User = {
  id: 1,
  name: "",
};

if (User.name == "") console.error("No user name provided"); // Dont do this

console.assert(User.name, "User name is missing"); // Use this , nothing will happen if everything's alright or else it will throw assertion failed

// Output : Assertion failed: User name is missing
