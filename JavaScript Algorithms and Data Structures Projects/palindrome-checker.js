function palindrome(str) {
    
    let backwardSpelling = "";
    
    str = str.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase()

    for (let i = str.length - 1; i >= 0; i--) {
        backwardSpelling += (str[i]) 
    }
        
    return backwardSpelling === str ? true : false 

}

palindrome("eye");