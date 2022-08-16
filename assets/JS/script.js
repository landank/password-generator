//password generation
var generatePassword = function () {

    //password length promt
    var passwordLength = getPasswordLength();

    //character choice promt
    var fullSet = getFullSet();

    //Cycle through the loop based on the password length the user chose
    newPassword = "";

    for (i = 0; i < passwordLength; i++) {
      getRandomIndex = Math.floor(Math.random() * fullSet.length);
      getNextCharacter = fullSet[getRandomIndex];
      newPassword = newPassword + getNextCharacter;
    };
    return newPassword;
};//end of password generation



//password length prompt
var getPasswordLength = function() {
    length = window.prompt("Choose a length for your password.");

    //if no length entered, prompt again
    if (!length) {
      while(!length) {
        window.alert("You must enter a length for your password.");
        length = window.prompt("Choose a length for your password.");
      }
    }

    //If length is not 8-128, prompt user to try again
    if (length < 8 || length > 128) {
      while(length < 8 || length > 128) {
        window.alert("Your password must be between 8 and 128 characters.");
        length = window.prompt("Choose a length for your password.");
      }
    }

    return length;
}; //end of password length function



//create list of characters to be used
var getFullSet = function() {
    var includeLowercase = false;
    var includeUppercase = false;
    var includeNumbers = false;
    var includeSpecial = false;
    while (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
      var includeLowercase = window.confirm("Include lowercase letters?");
      var includeUppercase = window.confirm("Include uppercase letters?");
      var includeNumbers = window.confirm("Include numbers?");
      var includeSpecial = window.confirm("Include special characters?");
      if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
        window.alert("You must select at least 1 character type.");
      }
    }
    
    //all characters that can be used
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t","u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var special = ["!", "\"", "#", "$", "%", "\&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "[", "]", "\\", "^", "_", "{", "}", "~"];

    //compile them into a string
    var full = [];
    if (includeLowercase) {
      full = full.concat(lowercase);
    };
    if (includeUppercase) {
      full = full.concat(uppercase);
    };
    if (includeNumbers) {
      full = full.concat(numbers);
    };
    if (includeSpecial) {
      full = full.concat(special);
    };

    return full;
};// end of all characters function



// '#generate element' reference
var generateBtn = document.querySelector("#generate");

// password length 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// event listener function
generateBtn.addEventListener("click", writePassword);
