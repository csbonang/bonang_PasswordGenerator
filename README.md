# bonang_PasswordGenerator
  programmer: Clarisse Bonang <br> 
  deployed link: https://csbonang.github.io/bonang_PasswordGenerator/ 
# Description 
  The program generates a password by meeting all requirements. 
  First, the user is prompted on the password length. Then, the user is asked if they would like to include 
  any of the following in the password to be generated: numbers, special characters, a word that is upper or lowercase. 
# Requirements
```
1. When I click the button to generate a password
   Then I am presented with a series of prompts for password criteria
2. When prompted for password criteria
   Then I select which criteria to include in the password
3. When prompted for the length of the password
   Then I choose a length of at least 8 characters and no more than 128 characters
4. When prompted for character types to include in the password
   Then I choose lowercase, uppercase, numeric, and/or special characters
5. When I answer each prompt
   Then my input should be validated and at least one character type should be selected
6.  When all prompts are answered
   Then a password is generated that matches the selected criteria
7. When the password is generated
   Then the password is either displayed in an alert or written to the page
```

# Screenshot(s)
Upon Opening: ![Page0](https://github.com/csbonang/bonang_PasswordGenerator/blob/main/screenshot0.PNG)
Prompt User(the user is prompted on the other properties as well): ![Page1](https://github.com/csbonang/bonang_PasswordGenerator/blob/main/screenshot1.PNG)
Password Generated: ![Page2](https://github.com/csbonang/bonang_PasswordGenerator/blob/main/screenshot2.PNG)
# References 
special characters 
https://owasp.org/www-community/password-special-characters
<br>
string concatenation 
https://www.w3schools.com/jsref/jsref_concat_string.asp
<br>
generate random strings
https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
<br>
generate random numbers 
https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
<br>
make string uppercase/lowercase 
https://www.w3schools.com/jsref/jsref_touppercase.asp
<br>
check if variable is a number 
https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/

