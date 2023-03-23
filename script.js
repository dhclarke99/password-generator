// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passLength = window.prompt("Choose a password length (Must be between 8 and 128 characters):");
  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid Password Length");
}
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);