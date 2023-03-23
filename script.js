// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //prompt user to input a number for character length  
  var passLength = window.prompt("Choose a password length (Must be between 8 and 128 characters):");
  //confirming selected length is greater than 8 and less than 128
  if (passLength < 8 || passLength > 128) {
    window.alert("Invalid Password Length");
} else {
    console.log(passLength)
  
}
  
  // creating variables for each character type with all possible values
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var digit = "123456789"
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  
  // creating window.confirm pop ups so the user can select if specific charater types are required
  var confirmlowerCase = window.confirm("Require password to include lower case letters? (click 'ok' if yes, 'cancel' if no")
  var confirmupperCase = window.confirm("Require password to include upper case letters?")
  var confirmdigit = window.confirm("Require password to include digits?")
  var confirmspecial = window.confirm("Require password to include special characters?")

  // confirming the window.confirm popups above are logging true or false values  
  console.log(confirmlowerCase)
  console.log(confirmupperCase)
  console.log(confirmdigit)
  console.log(confirmspecial)



  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);