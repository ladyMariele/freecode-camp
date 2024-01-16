const button = document.getElementById("check-btn")
const result = document.getElementById("result")
let textInput = document.getElementById("text-input")


button.addEventListener("click", function() {
    
    let reverseSpell = ""

    let textInputText = textInput.value
    
    let textInputRegex = textInputText.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    
    for ( let i = textInputRegex.length; i >= 0 ; i-- ) {
        reverseSpell += (textInputRegex[i])
    }
    
    if (textInputText === "") {
        alert("Please input a value");
    } else if (undefined + textInputRegex === reverseSpell) {
        result.innerText = `${textInputText} is a palindrome`
    } else {
        result.innerText = `${textInputText} is not a palindrome`
    }
})

