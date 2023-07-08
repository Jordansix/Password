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


// password length 8 < 128
var characterLength = 8;
 
// lowercase, uppercase, number, special characters.
 var choiceArr = [];
 var speacialCharArry = ['!','@','#','$','%','^','&','*','(',')','-','+','=','<','>','?','{','[','}',']'];
 var lowercaseArry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var uppercaseAry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var numberArry = ['1','2','3','4','5','6','7','8','9','0'];
   
function generatePassword() { 
  return "temp password";
}

// Prompts
function getPrompts() {
  characterLength = parsetInt(prompt("How many characters do you want? (8 - 128 characters"));

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    return false;
  }
 if (confirm("Would yo like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseArry);
 }
 if (confirm("Would yo like uppercase letters in your password?")) {
   choiceArr = choiceArr.concat(uppercaseAry);
 }
 if (confirm("Would yo like special characters in your password?")) {
  choiceArr = choiceArr.concat(speacialCharArry);
 }
 if (confirm("Would yo like numbers in your password?")) {
  choiceArr = choiceArr.concat(numberArry);
 }  
 return true;
}  