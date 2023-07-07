// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
   
function generatePassword() {
  console.log("Hey, the botton workes");

 // 1. Presented with prompts for the user.
 // a password length 8 < 128
 // b lowercase, uppercase, number, special characters.
 // 2 Validate the input.
 // 3 generate the password based on criteria.
 // 4 Display the password to the page.


  return "temp password";

}