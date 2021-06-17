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
    while (passwordInfo.passLength < 8 || passwordInfo.passLength > 128) 
    {
        window.alert("Password length is not within range of 8-128 characters")
        passwordInfo.passLength = window.prompt("Enter a password length between 8-128: ");
    }
  // keep track of total password length 
    var totalPassLength = passwordInfo.passLength; 
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
  // lengthRandom::holds the value that will be generated by generateRandomNumer 
    var lengthRandom = 0; 

  // all character type options 
  if(passwordInfo.numbers && passwordInfo.specialChar && passwordInfo.lowercase && passwordInfo.uppercase)
  {
    //===========WORD======================================== 
      // UPPER CASE 
      // call to generate random number within range 
      lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 2 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 3)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom);
      // UPPER  
        // make word uppercase or lowercase 
        password = password.toUpperCase(); 
        // print updated password 
          console.log("Updated password with uppercase: " +  password); 
        // update the length 
          passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
        // print updated length 
          console.log("Updated password length: " + passwordInfo.passLength); 
      // LOWER CASE 
          while (!(lengthRandom <= (passwordInfo.passLength - 2)))
          {
            lengthRandom = generateRandomNumber(passwordInfo.passLength); 
          }
        // print generated number to console
          console.log("Random pass length within range: " + lengthRandom); 
        // generate a word  
          passLowecase = (generateWord(lengthRandom)).toLowerCase(); 
          password = password.concat(passLowecase); 
        // print updated password 
          console.log("Updated password with lowercase: " +  password); 
        // update the length 
          passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
        // print updated length 
          console.log("Updated password length: " + passwordInfo.passLength);

      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        }
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
      // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with special character: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      
  }
  // user selecter numbers, special character, and (lower or uppercase)
  else if (passwordInfo.numbers && passwordInfo.specialChar && passwordInfo.lowercase)
    {
      console.log("Numbers, Special Character, and Lowercase selected")
      //===========WORD======================================== 
      // call to generate random number within range 
      lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 2)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        } 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // make word lowercase 
        password = password.toLowerCase(); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        }
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
      // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with special character: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
    }
    else if(passwordInfo.numbers && passwordInfo.lowercase && passwordInfo.uppercase)
    {
      //===========WORD======================================== 
      // UPPER CASE 
      console.log("Numbers, Lowercase, and Uppercase selected")
      // call to generate random number within range 
      lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 2 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 2)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom);
        // make word uppercase or lowercase 
        password = password.toUpperCase(); 
        // print updated password 
          console.log("Updated password with uppercase: " +  password); 
        // update the length 
          passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
        // print updated length 
          console.log("Updated password length: " + passwordInfo.passLength); 
      // LOWER CASE 
          while (!(lengthRandom <= (passwordInfo.passLength - 1)))
          {
            lengthRandom = generateRandomNumber(passwordInfo.passLength); 
          }
        // print generated number to console
          console.log("Random pass length within range: " + lengthRandom); 
        // generate a word  
          passLowecase = (generateWord(lengthRandom)).toLowerCase(); 
          password = password.concat(passLowecase); 
        // print updated password 
          console.log("Updated password with lowercase: " +  password); 
        // update the length 
          passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
        // print updated length 
          console.log("Updated password length: " + passwordInfo.passLength);

      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        // ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
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
    }
    // user selecter numbers, special character, and (lower or uppercase)
  else if (passwordInfo.numbers && passwordInfo.specialChar && passwordInfo.uppercase)
  {
    console.log("Numbers, Special Character, and Uppercase selected")
    //===========WORD======================================== 
    // call to generate random number within range 
    lengthRandom = generateRandomNumber(passwordInfo.passLength); 
    //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
      while (!(lengthRandom <= (passwordInfo.passLength - 2)))
      {
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      } 
    // print generated number to console
      console.log("Random pass length within range: " + lengthRandom); 
    // generate a word  
      password = generateWord(lengthRandom); 
    // make word lowercase 
      password = password.toUpperCase(); 
    // print updated password 
      console.log("Updated password with word: " +  password); 
    // update the length 
      passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
    // print updated length 
      console.log("Updated password length: " + passwordInfo.passLength); 
    //==========NUMBER======================================= 
    // call to generate random number within range  
      lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
      while (!(lengthRandom <= (passwordInfo.passLength - 1)))
      {
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      }
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
    // TODO: ensure that it occupies full length
      if((passwordInfo.passLength - lengthRandom) != 0) 
      {
        console.log("passLength needs to be 0")
        lengthRandom = passwordInfo.passLength; 
        console.log("Updated random length: " + lengthRandom); 
      }
    // print generated number to console
      console.log("Random pass length within range: " + lengthRandom); 
    // generate a special character 
      password = password.concat(generateSpecialCharacter(lengthRandom)); 
    // print updated password 
      console.log("Updated password with special character: " + password); 
    // update the length 
      passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
    // print updated length 
      console.log("Updated password length: " + passwordInfo.passLength); 
  }
    // generate number and special character 
    else if(passwordInfo.numbers && passwordInfo.specialChar)
    {
      console.log("Number and Special Character selected"); 
      //==========NUMBER======================================= 
      // call to generate random number within range  
      lengthRandom = generateRandomNumber(passwordInfo.passLength);
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
      while (!(lengthRandom <= (passwordInfo.passLength - 1)))
      {
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      } 
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
      // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with special character: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
    }
    // generate a number and lower and upper
    
    // generate number and lowercase 
    else if(passwordInfo.lowercase && passwordInfo.numbers)
    {
      console.log("Number and Lowercase selected")
      //===========WORD======================================== 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        } 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // make word lowercase 
        password = password.toLowerCase(); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength);
      // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
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
    }

    // generate number and uppercase
    else if(passwordInfo.numbers && passwordInfo.uppercase)
    {
      console.log("Number and Uppercase selected")
      //===========WORD======================================== 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        } 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // make word uppercase 
        password = password.toUpperCase(); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //==========NUMBER======================================= 
      // call to generate random number within range  
        lengthRandom = generateRandomNumber(passwordInfo.passLength);
      // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
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
    }

    //generate special character and lowercase 
    else if(passwordInfo.specialChar && passwordInfo.uppercase)
    {
      console.log("Special Character and Uppercase selected"); 
      //===========UPPER======================================== 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        } 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // make word uppercase 
        password = password.toUpperCase(); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //===========SPECIAL CHARS==============================// 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength);
     // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with special character: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
    }

    else if(passwordInfo.specialChar && passwordInfo.lowercase)
    {
      console.log("Special Character and Lowercase selected"); 
      //===========UPPER======================================== 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength); 
      //to ensure there is at least one of each character type, limit the random number generated to be 1 less than the length
        while (!(lengthRandom <= (passwordInfo.passLength - 1)))
        {
          lengthRandom = generateRandomNumber(passwordInfo.passLength); 
        } 
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a word  
        password = generateWord(lengthRandom); 
      // make word uppercase 
        password = password.toLowerCase(); 
      // print updated password 
        console.log("Updated password with word: " +  password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
      //===========SPECIAL CHARS==============================// 
      // call to generate random number within range 
        lengthRandom = generateRandomNumber(passwordInfo.passLength);
     // TODO: ensure that it occupies full length
        if((passwordInfo.passLength - lengthRandom) != 0) 
        {
          console.log("passLength needs to be 0")
          lengthRandom = passwordInfo.passLength; 
          console.log("Updated random length: " + lengthRandom); 
        }
      // print generated number to console
        console.log("Random pass length within range: " + lengthRandom); 
      // generate a special character 
        password = password.concat(generateSpecialCharacter(lengthRandom)); 
      // print updated password 
        console.log("Updated password with special character: " + password); 
      // update the length 
        passwordInfo.passLength = passwordInfo.passLength - lengthRandom; 
      // print updated length 
        console.log("Updated password length: " + passwordInfo.passLength); 
    }
    // if the user only selects one character type, then generate only that character type. 
    else if(passwordInfo.lowercase) 
    {
          password = generateWord(passwordInfo.passLength); 
          password = password.toLowerCase(); 
          // print updated password 
          console.log("Updated password with only lowercase: " +  password); 
    }
    else if(passwordInfo.uppercase)
    {
      password = generateWord(passwordInfo.passLength); 
      password = password.toUpperCase(); 
      // print updated password 
      console.log("Updated password with only uppercase: " +  password); 
    }
    else if(passwordInfo.numbers)
    {
          // generate number
            password = generateNumber(passwordInfo.passLength); 
          // print updated password 
            console.log("Updated password with number: " + password); 
    }
    else if(passwordInfo.specialChar)
    {
          // generate a special character 
            password = generateSpecialCharacter(passwordInfo.passLength); 
          // print updated password 
            console.log("Updated password with special character: " + password); 
    }
    else 
    {
      window.alert("You did not select any character type"); 
      console.log("number: " + passwordInfo.numbers + " special char:" + passwordInfo.specialChar + " lowercase:"+ passwordInfo.lowercase + " uppercase:" + passwordInfo.uppercase);
      generatePassword();  
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
   var charLength = characters.length; 
   for(var i = 0; i < passwordLength; i++)
   {
     word += characters.charAt(Math.floor(Math.random() * 
     charLength));
   }
   return word; 
}
function generateNumber(passwordLength)
{
  var number =""; 
  var characters = '0123456789'; 
  var charLength = characters.length; 
  for(var i = 0; i < passwordLength; i++)
  {
    number += characters.charAt(Math.floor(Math.random() * 
    charLength));
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
// listens for a click then we are going ot execute the writepassword function. 
generateBtn.addEventListener("click", writePassword);
