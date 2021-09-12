// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//my code
function generatePassword(){
 

  var pwdLength = window.prompt("Choose length of password.Min 8 chars and Max 128 chars");


     if(pwdLength >=8 && pwdLength <= 128 ){
       var pwdLength_new = parseInt(pwdLength);
           
       var lcLetter1 = confirm ("Do you want to include lowercase letters ?");
       var ucLetter1 = confirm ("Do you want to include Uppercase letters ?");
       var numbers1 = confirm( "Do you want to include Numbers ? ");
       var special1 =confirm("Do you want to include Special Chars ?");  
   
       var lcLetter = 'abcdefghijklmnopqrstuvwxyz';
       var ucLetter = lcLetter.toUpperCase();
       var special = '!?=#*$@+-.';
       var numbers = '0123456789'; 

// All  confirm msges are true

      
       if(pwdLength_new >= 8 && pwdLength_new <= 128 && lcLetter1 && ucLetter1 && numbers1 && special1){


          
        var lengthpwd = pwdLength_new ;
        function generatepwd(lengthpwd){
          var Allpassword = ucLetter +lcLetter +numbers + special;
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(math.random()* (Allpassword.length - 7))+8;
               console.log("**************" +randomPwd);
            }
      
        }

       }

    } 
 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
