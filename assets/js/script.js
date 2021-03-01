// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function pullTogether() {

  var calculate = lengthOfKey();
  console.log(calculate);

  var c = capLower();
  console.log(c);
  var b = numsOspecial();
  console.log(b);

  var key = b + c;
  console.log(key);

  var masterKey = '';


  for (var i = 0; i < calculate; i++) {

    masterKey += key[Math.floor(Math.random() * key.length)]
  }

  return masterKey;


}

function generatePassword() {


  return pullTogether();

}


function lengthOfKey() {

  var answer = prompt("Enter a number for the length you want your Password?", "8-128");


  if (answer >= 8 && answer <= 128) {

    return answer;

  }
  else {

    return lengthOfKey();
  }

}

function capLower() {

  var letterAns = prompt("Enter 1 for Capital letters, Enter 2 for lower case letters, Enter 3 for both.", "default");

  var caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = 'abcdefghijklmnopqrstuvwxyz';
  var both = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

  switch (letterAns) {
    case "1":
      return caps;
      break;
    case "2":
      return lower;
      break;
    case "3":
      return both;
      break;
  }


}


function numsOspecial() {
  var numAns = prompt("1 for numbers, 2 for special chartacters, 3 for both ");
  var nums = '0123456789';
  var special = '!@#$%^&*()_-+=[]{}\|;:,<.>/?';
  var both = '0!1@2#3$4%5^6&7*8(9)_-+=[]{}\|;:,<.>/?';


  switch (numAns) {
    case "1":
      return nums;
      break;
    case "2":
      return special;
      break;
    case "3":
      return both;
      break;
  }

}

