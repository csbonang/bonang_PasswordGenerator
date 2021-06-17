// password criteria properties 
var passwordInfo = 
{
  passLength: 0, 
  lowercase: false, 
  uppercase: false,
  numbers: false,
  specialChar: false
}; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
//generatePassword:: generates password for user 
function generatePassword()
{
  var password = ""; 
  //===========PROMPT USER================================== 
  // prompt that user for password length (8-128)
    passwordInfo.passLength = window.prompt("Enter a password length between 8-128: ");
  // check if password length is within the correct length 
    if(passwordInfo.passLength < 8 || passwordInfo.passLength > 128) 
    {
        window.alert("Password length is not within range of 8-128 characters")
        generatePassword(); 
    }
  // prompt for lowercase letter (confirm )
    passwordInfo.lowercase = confirm("Would you like your password to be lowercase? "); 
  // prompt for uppercase letter (confirm)
    passwordInfo.uppercase = confirm("Would you like your password to be uppercase? "); 
  // prompt user if they want to include a number.  
    passwordInfo.numbers = confirm("Would you like to include a number in your password?"); 
  // prompt for special characters 
    passwordInfo.specialChar = confirm("Would you like to include a special character?"); 
  //print the password length 
    console.log("Password Length "+passwordInfo.passLength); 
// TODO: ensure that it occupies full length 
    if(passwordInfo.numbers && passwordInfo.specialChar && (passwordInfo.lowercase || passwordInfo.uppercase))
    {
      //===========WORD======================================== 
      // call to generate random number within range 
      var lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a number 
        password = password.concat(generateNumber(lengthRandom)); 
      // print updated password 
        console.log("Updated password with number: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //===========SPECIAL CHARS==============================// 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with number: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
    }
    // generate number and special character 
    else if(passwordInfo.numbers && passwordInfo.specialChar)
    {
      console.log("Number and Special Character selected"); 
    }
    // generate number and word 
    else if(passwordInfo.numbers && (passwordInfo.lowercase || passwordInfo.uppercase))
    {
      console.log("Number and Word selected")
    }
    //generate special character and word
    else if(passwordInfo.specialChar && (passwordInfo.lowercase || passwordInfo.uppercase))
    {
      console.log("Special Character and Word selected")
    }
    else 
    {
      window.alert("You did not select any character type"); 
      generatePassword(); 
      console.log("number: " + passwordInfo.numbers + " special char:" + passwordInfo.specialChar + " lowercase:"+ passwordInfo.lowercase + " uppercase:" + passwordInfo.uppercase); 
    }
   return password; 
}
function generateRandomNumber(passwordMax)
{
  // generates a number within the given range. 
  lengthRandom = Math.random()*(passwordMax - 1) + 1;
  // ensures that the length generated is an integer 
  lengthRandom = Math.floor(lengthRandom); 
  return lengthRandom; 
}
function generateWord(passwordLength)
{
   var word =""; 
   var characters = 'abcdefghijklmnopqrstuvwxyz'; 
   for(var i = 0; i < passwordLength; i++)
   {
     word += characters.charAt(Math.floor(Math.random() * 
     passwordLength));
   }
   return word; 
}
function generateNumber(passwordLength)
{
  var number =""; 
  var characters = '0123456789'; 
  for(var i = 0; i < passwordLength; i++)
  {
    number += characters.charAt(Math.floor(Math.random() * 
    passwordLength));
  }
  return number; 
}
function generateSpecialCharacter(passwordLength)
{
  var specialChar = ""; 
  var characters = ['!','#', '$', '%', '&',"'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '>', '=', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
  for(var i = 0; i < passwordLength; i++)
  {
    // Math.random gets a random number and multiplies it by the array length. Then, uses Math.floor to get an index ranging from 0 to the array length 
    specialChar += characters[Math.floor(Math.random() * characters.length)];
  }
  return specialChar; 
}


// Add event listener to generate button
// selecting everything that has the id generate. 
// listens for a click 
// then we are going ot execute the writepasswork function. 
generatePassword(); 
generateBtn.addEventListener("click", writePassword);