// Assignment code here
var lcLetter = 'abcdefghijklmnopqrstuvwxyz';
var ucLetter = lcLetter.toUpperCase();
var special = '!?=#*$@+-.';
var numbers = '0123456789'; 
var password = '';

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//my code
function generatePassword(){

  var pwdLength = parseInt(window.prompt("Choose length of password.Min 8 chars and Max 128 chars"));
   // if no input provided
  if(!pwdLength)
  {
    alert("Please provide a value");
  }
  // if input lessthan 8
   else if (pwdLength < 8 || pwdLength > 128)
   {
   
    pwdLength = parseInt(window.prompt("you must choose between 8  and  128 chars"));
  }
   else {
    confirmNumber =  confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");

   }

// user don't select any option
   if(!confirmLowercase && !confirmUppercase && !confirmCharacter && !confirmNumber ) {
       alert ("You must choose a criteria.");
   }


   // user select all 4
  else if(confirmLowercase && confirmUppercase && confirmCharacter && confirmNumber ) {
    password = lcLetter + ucLetter +numbers+special;
 }
 // user select 3 lc,uc,special char

 else if(confirmLowercase && confirmUppercase && confirmCharacter  ) {
  password = lcLetter + ucLetter +special;

 }

 // user selects lc,uc,num
 else if(confirmLowercase && confirmUppercase && confirmNumber ) {
  password = lcLetter + ucLetter +numbers;
}

// user selects lc,num , spcial
else if(confirmLowercase && confirmCharacter && confirmNumber ) {
  password = lcLetter+numbers+special;
}
// user selects lc,uc
else if(confirmLowercase && confirmUppercase) {
  password = lcLetter + ucLetter;
}

// user selects num, char
else if(confirmCharacter && confirmNumber ) {
  password = numbers+special;
}

// user selects uc,num,special
  else if(cconfirmUppercase && confirmCharacter && confirmNumber ) {
    password =  ucLetter +numbers+special;
 }
 // user select lc
 else if(confirmLowercase ) {
  password = lcLetter ;
}
// user selct uc
else if( confirmUppercase ) {
  password = ucLetter;
}

// user select num

else if(confirmNumber ) {
  password = numbers;
}
// user select special char

else if( confirmCharacter  ) {
  password = special;
}
//password1 a placeholder for length
var password1 = [];

// random selection
for (var i = 0;i < pwdLength; i++){
  var randomCharacter = password[Math.floor(Math.random()*password.length + 1)];
  // var addPassword111 = Math.floor(Math.random()*password.length + 1);
  console.log("addPassword************" +randomCharacter);
 
  password1.push(randomCharacter);

  
}
var joinpwd =password1.join("");
// //end of generatePassword()
return joinpwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
