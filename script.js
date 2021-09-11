// Assignment code here

//Constants
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+","~", "?", "'", "|", "{", "}"];

// Variables
var confirmLength = "";
var confirmAlphaLower;
var confirmAlphaUpper;
var confirmNumChar;
var confirmSpecialChar;

// Prompt user for length of password 
function generatePassword() {
  var confirmLength = (prompt("How many characters would you like in your password? Please enter a number between 8 and 128."));

  // Loop if answer is outside the parameters 
  while(confirmLength <= 7 || confirmLength >= 129) {
      alert("Password length must be between 8-128 characters Try again");
      var confirmLength = (prompt("How many characters would you like in your password? Please enter a number between 8 and 128."));
      } 
      //Alert number of characters chosen
      alert(`Your password will have ${confirmLength} characters`);

    // Determine which criteria to include in password 
    var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
    var confirmNumChar = confirm("Click OK if you would like to include numeric characters");    
    var confirmAlphaUpper = confirm("Click OK if you would like to include uppercase characters");
    var confirmAlphaLower = confirm("Click OK if you would like to include lowercase characters");

    // Loop if answer is outside the parameters and ask again until at least one os chosen
    while(confirmAlphaUpper === false && confirmAlphaLower === false && confirmSpecialChar === false && confirmNumChar === false) {
      alert("You have to choose at least one option.");
      var confirmSpecialChar = confirm("Click OK if you would like to include special characters");
      var confirmNumChar = confirm("Click OK if you would like to include numeric characters");    
      var confirmAlphaUpper = confirm("Click OK if you would like to include uppercase characters");
      var confirmAlphaLower = confirm("Click OK if you would like to include lowercase characters");   
  };

  var passwordCharacters = [];

  //concatenate criteria selections
  if (confirmSpecialChar) {
    
    passwordCharacters = passwordCharacters.concat(specialChar)
  };

  if (confirmNumChar) {
    passwordCharacters = passwordCharacters.concat(number)
  };
    
  if (confirmAlphaLower) {
    passwordCharacters = passwordCharacters.concat(alphaLower)
  };

  if (confirmAlphaUpper) {
    passwordCharacters = passwordCharacters.concat(alphaUpper)
  } ;   

  var randomPassword = "";
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  };
  return randomPassword;
};


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
