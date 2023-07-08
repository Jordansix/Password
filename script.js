// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts  = getPrompts(); //return true or false 

  if(correctPrompts) {
   var setpassword = generatePassword();
   var passwordText = document.querySelector("#password");
   passwordText.value = setpassword;
  } 
}

// password length 8 < 128
var characterLength = 8;
 
// lowercase, uppercase, number, special characters.
 var choiceArr = [];
 var speacialCharArry = ['!','@','#','$','%','^','&','*','(',')','-','+','=','<','>','?','{','[','}',']'];
 var lowercaseArry = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
 var uppercaseAry = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 var numberArry = ['1','2','3','4','5','6','7','8','9','0'];
   
function generatePassword() { 
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomLetter = math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomLetter];
  }
  return password;
}

// Prompts
function getPrompts(){
  characterLength = parseInt(prompt("How many characters do you want? (8 - 128 characters")); //NaN

  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a numberArry, 8 -128 DOMStringList. please try again.");
    return false;
  }
 if (confirm("Would you like lowercase letters in your password?")) {
    choiceArr = choiceArr.concat(lowercaseArry);
 }
 if (confirm("Would you like uppercase letters in your password?")) {
    choiceArr = choiceArr.concat(uppercaseAry);
 }
 if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(speacialCharArry);
 }
 if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArry);
 }  
 return true;
}  

