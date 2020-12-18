// Assignment Code
let generateBtn = document.querySelector("#generate");

confirm('Your password must include at least one of the following.')
confirm('A lower case letter or upper case letter')
confirm('A number or special character')
confirm('And your password must be atlest 8 characters and not more then 128 characters')
prompt('Enter a password!')


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
