// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


//my code
function generatePassword(){

  var lcLetter = 'abcdefghijklmnopqrstuvwxyz';
  var ucLetter = lcLetter.toUpperCase();
  var special = '!?=#*$@+-.';
  var numbers = '0123456789'; 


  var pwdLength = window.prompt("Choose length of password.Min 8 chars and Max 128 chars");


     if(pwdLength >=8 && pwdLength <= 128 ){
       var pwdLength_new = parseInt(pwdLength);
           console.log(" password length" +pwdLength_new);
       var lcLetter1 = confirm ("Do you want to include lowercase letters ?");

       var ucLetter1 = confirm ("Do you want to include Uppercase letters ?");
       var numbers1 = confirm( "Do you want to include Numbers ? ");
       var special1 =confirm("Do you want to include Special Chars ?");  
   
   
// All  confirm msges are true

      
       if(pwdLength_new >= 8 && pwdLength_new <= 128 && lcLetter1 && ucLetter1 && numbers1 && special1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = ucLetter +lcLetter +numbers + special;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password*********" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 
       // if lc,uc,num selected
        if(pwdLength_new >= 8 && pwdLength_new <= 128 && lcLetter1 && ucLetter1 && numbers1){


            
          var lengthpwd = pwdLength_new ;

          console.log("length of password in if block" + lengthpwd);
          function generatepwd(lengthpwd){
            var Allpassword = ucLetter +lcLetter +numbers;
            console.log( " Allpassword" + Allpassword);
            var password = ' ';
              for( var i = 0; i < lengthpwd; i++){
                // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
                var randomPwd =  Math.floor(Math.random()* Allpassword.length);
                console.log ("random password" + randomPwd);
                  password +=  Allpassword.charAt(randomPwd);
                console.log("final password" +password);
              }
              // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
              return password;
          }
       
       } 


       // if lc uc selected
       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && lcLetter1 && ucLetter1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = ucLetter +lcLetter;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 

       // if lc selected
       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && lcLetter1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = lcLetter;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 
       // if only uc selected
       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && ucLetter1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = ucLetter;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 

       //if only numbers selected
       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && numbers1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = numbers;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 
       // if only special char

       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && special1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = special;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 
       // number and special
       else if(pwdLength_new >= 8 && pwdLength_new <= 128 && special1 && numbers1){


          
        var lengthpwd = pwdLength_new ;

        console.log("length of password in if block" + lengthpwd);
        function generatepwd(lengthpwd){
          var Allpassword = special + numbers;
          console.log( " Allpassword" + Allpassword);
          var password = ' ';
            for( var i = 0; i < lengthpwd; i++){
              // password between any two numbers :Math.floor(Math.random() * (max - min + 1)) + min;
               var randomPwd =  Math.floor(Math.random()* Allpassword.length);
              console.log ("random password" + randomPwd);
                password +=  Allpassword.charAt(randomPwd);
               console.log("final password" +password);
            }
            // if pwdLength is 8 ,then password should return 8 character including lc,uc,num,specialchar
             return password;
        }
       
       } 
       else{
         alert("Please select atleast one condition from lowercase,uppercase,number or special Character");
       }
 
    } else{
      alert("Please enter a number between 8 and 128");
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
