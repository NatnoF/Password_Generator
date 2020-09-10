// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function generatePassword ()
{
  //Variables; Password will be what is returned, userLength will hold a num, newArray will store a combined array, and the rest are booleans.
  var password = "";
  var userLength = 0;
  var userLower = true;
  var userUpper = true;
  var userNumbers = true;
  var userSpecial = true;
  var newArray = [];

  userLength = prompt("How many characters do you want your password to contain?");

  //Verifying that the length of the password meets the condition of the assignment. Will continue asking for a length until it does.
  while (userLength < 8 || userLength > 128)
  {
    userLength = prompt("Please choose an amount that's within 8 and 128 characters (inclusive)");
  }

  userLower = confirm("Do you want to include lower case letters in your password? (OK = yes, Cancel = No)");
  userUpper = confirm("Do you want to include upper case letters in your password? (OK = yes, Cancel = No)");
  userNumbers = confirm("Do you want to include numbers in your password? (OK = yes, Cancel = No)");
  userSpecial = confirm("Do you want to include special charactersd in your password? (OK = yes, Cancel = No)");

  //Decision making for the pool in which the password will be created from
  if (userLower)
  {
    newArray.push(...lowerCase);
  }
  if (userUpper)
  {
    newArray.push(...upperCase);
  }
  if (userNumbers)
  {
    newArray.push(...numbers);
  }
 if (userSpecial)
  {
    newArray.push(...specialCharacters);
  }
  if (!userLower && !userUpper && !userNumbers && !userSpecial)
  {
    alert("You can't have a password with none of these options...");
    return "Please Click Generate Password Again";
  }

//Creating password
for(var i = 0; i < userLength; i++)
{
  var rand = Math.floor(Math.random()*newArray.length);
  password += newArray[rand];
}

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
