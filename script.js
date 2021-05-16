// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates a password with array of strings
function generatePassword(){
  confirm('Your random password will have atleast one of the following')
  confirm('A uppercase letter')
  confirm('A lower case letter')
  confirm('A symbol')
  confirm('And a number')

  let char = prompt('How many characters would you like?')
  let password = "";
  let minChar = 8
  let maxChar = 128
  let charRequirments  = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let charLength = charRequirments.length
  let randomNumber;
    
  for (let i = 0; i < char ; i++){
    randomNumber = charRequirments[Math.floor(Math.random() * charLength)]
    password += randomNumber 
    
  }

  if(char > minChar && char < maxChar){
    return password
  } else {
    return "Character doesn't meet the requirements"
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);