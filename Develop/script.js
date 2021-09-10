// Assignment code here
var allCases = (
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
)

var allNumbers = (
  "0123456789"
)

var specialCharacters = (
  "!@#$%^&*()_+{}|:<>?./;[]\=-"
)

//variables 
const lowerUpper

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 

