function palindrome(str) {
    
    let backwardSpelling = "";
    // replace non-alphanumeric chars with empty string, and then convert all the remaining chars to lowercase
    str = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

    for (let i = str.length - 1; i >= 0; i--) {
        backwardSpelling += (str[i]) 
    }
    // use ternary operator to compare the two strings to return a boolean value
    return backwardSpelling === str ? true : false 

}

palindrome("eye");
