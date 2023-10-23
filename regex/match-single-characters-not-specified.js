
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Changed this line
let result = quoteSample.match(myRegex); // Changed this line


console.log(result)