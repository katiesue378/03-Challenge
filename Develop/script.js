// Assignment Code
var generateBtn = document.querySelector("#generate");
var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
var passwordLength = 8;
var password = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  for (var i = 0; i <= passwordLength; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);
  }
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
