let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line // code doesn't work if there are spaces, e.g. /dog | cat | bird | fish/
let result = petRegex.test(petString);