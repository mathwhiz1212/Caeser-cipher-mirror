"use strict";
//Licensed under the Apache License 2.0. See license file for information.
//Need to get the length of the string, then converter the string to an array with each memeber of the array being a character. Then we need to reference each letter in the array and encipher them using the encipher()
//  firstNumSplit[0] and string.length and split
function helper() {

  var firstNum = "initial";
  var shift = "initial";
  var firstLetter = "initial";
  var letters = /^[A-Za-z]+$/;
  
    //Get input
    var firstNum = prompt("Please enter the letter of the alphabet.");
    
    //Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php
    
    if (firstNum.match(letters))
    {
      //Do nothing.
    }
    else
    {
      alert("Please enter only letters.");
    }
    
    //Get length of input.
    var inputLength = firstNum.length;
    //alert(inputLength);
    
    var firstNumSplit = firstNum.split(""); 
    //alert(firstNumSplit[0]);
    //alert(firstNumSplit[1]);
    
    var shift = Number(prompt("Please enter the shift."));

  //Encipher
  
  //If there is one or more letters in the string then encipher the first letter.
  
  if (inputLength => 1) {
    
    if (firstNumSplit[0] === "a") {
      var firstNum = 1;
    }
    if (firstNumSplit[0] === "b") {
      var firstNum = "2";
    }
    if (firstNumSplit[0] === "c") {
      var firstNum = "3";
    }
    if (firstNumSplit[0] === "d") {
      var firstNum = "4";
    }
    if (firstNumSplit[0] === "e") {
      var firstNum = "5";
    }
    if (firstNumSplit[0] === "f") {
      var firstNum = "6";
    }
    if (firstNumSplit[0] === "g") {
      var firstNum = "7";
    }
    if (firstNumSplit[0] === "h") {
      var firstNum = "8";
    }
    if (firstNumSplit[0] === "i") {
      var firstNum = "9";
    }
    if (firstNumSplit[0] === "j") {
      var firstNum = "10";
    }
    if (firstNumSplit[0] === "k") {
      var firstNum = "11";
    }
    if (firstNumSplit[0] === "l") {
      var firstNum = "12";
    }
    if (firstNumSplit[0] === "m") {
      var firstNum = "13";
    }
    if (firstNumSplit[0] === "n") {
      var firstNum = "14";
    }
    if (firstNumSplit[0] === "o") {
      var firstNum = "15";
    }
    if (firstNumSplit[0] === "p") {
      var firstNum = "16";
    }
    if (firstNumSplit[0] === "q") {
      var firstNum = "17";
    }
    if (firstNumSplit[0] === "r") {
      var firstNum = "18";
    }
    if (firstNumSplit[0] === "s") {
      var firstNum = "19";
    }
    if (firstNumSplit[0] === "t") {
      var firstNum = "20";
    }
    if (firstNumSplit[0] === "u") {
      var firstNum = "21";
    }
    if (firstNumSplit[0] === "v") {
      var firstNum = "22";
    }
    if (firstNumSplit[0] === "w") {
      var firstNum = "23";
    }
    if (firstNumSplit[0] === "x") {
      var firstNum = "24";
    }
    if (firstNumSplit[0] === "y") {
      var firstNum = "25";
    }
    if (firstNumSplit[0] === "z") {
      var firstNum = "26";
    }

    var firstLetter = Number(firstNum) + shift;
    if (firstLetter > 26) {
      var firstLetter = firstLetter - 26;
    }

    if (firstLetter === 1) {
      var firstLetter = "a";
    }
    if (firstLetter === 2) {
      var firstLetter = "b";
    }
    if (firstLetter === 3) {
      var firstLetter = "c";
    }
    if (firstLetter === 4) {
      var firstLetter = "d";
    }
    if (firstLetter === 5) {
      var firstLetter = "e";
    }
    if (firstLetter === 6) {
      var firstLetter = "f";
    }
    if (firstLetter === 7) {
      var firstLetter = "g";
    }
    if (firstLetter === 8) {
      var firstLetter = "h";
    }
    if (firstLetter === 9) {
      var firstLetter = "i";
    }
    if (firstLetter === 10) {
      var firstLetter = "j";
    }
    if (firstLetter === 11) {
      var firstLetter = "k";
    }
    if (firstLetter === 12) {
      var firstLetter = "l";
    }
    if (firstLetter === 13) {
      var firstLetter = "m";
    }
    if (firstLetter === 14) {
      var firstLetter = "n";
    }
    if (firstLetter === 15) {
      var firstLetter = "o";
    }
    if (firstLetter === 16) {
      var firstLetter = "p";
    }
    if (firstLetter === 17) {
      var firstLetter = "q";
    }
    if (firstLetter === 18) {
      var firstLetter = "r";
    }
    if (firstLetter === 19) {
      var firstLetter = "s";
    }
    if (firstLetter === 20) {
      var firstLetter = "t";
    }
    if (firstLetter === 21) {
      var firstLetter = "u";
    }
    if (firstLetter === 22) {
      var firstLetter = "v";
    }
    if (firstLetter === 23) {
      var firstLetter = "w";
    }
    if (firstLetter === 24) {
      var firstLetter = "x";
    }
    if (firstLetter === 25) {
      var firstLetter = "y";
    }
    if (firstLetter === 26) {
      var firstLetter = "z";
    }
}
    //If there is two or more letters in the string then encipher the second letter.
    
    if (inputLength => 2) {
      
      if (firstNumSplit[1] === "a") {
        var firstNum = 1;
      }
      if (firstNumSplit[1] === "b") {
        var firstNum = "2";
      }
      if (firstNumSplit[1] === "c") {
        var firstNum = "3";
      }
      if (firstNumSplit[1] === "d") {
        var firstNum = "4";
      }
      if (firstNumSplit[1] === "e") {
        var firstNum = "5";
      }
      if (firstNumSplit[1] === "f") {
        var firstNum = "6";
      }
      if (firstNumSplit[1] === "g") {
        var firstNum = "7";
      }
      if (firstNumSplit[1] === "h") {
        var firstNum = "8";
      }
      if (firstNumSplit[1] === "i") {
        var firstNum = "9";
      }
      if (firstNumSplit[1] === "j") {
        var firstNum = "10";
      }
      if (firstNumSplit[1] === "k") {
        var firstNum = "11";
      }
      if (firstNumSplit[1] === "l") {
        var firstNum = "12";
      }
      if (firstNumSplit[1] === "m") {
        var firstNum = "13";
      }
      if (firstNumSplit[1] === "n") {
        var firstNum = "14";
      }
      if (firstNumSplit[1] === "o") {
        var firstNum = "15";
      }
      if (firstNumSplit[1] === "p") {
        var firstNum = "16";
      }
      if (firstNumSplit[1] === "q") {
        var firstNum = "17";
      }
      if (firstNumSplit[1] === "r") {
        var firstNum = "18";
      }
      if (firstNumSplit[1] === "s") {
        var firstNum = "19";
      }
      if (firstNumSplit[1] === "t") {
        var firstNum = "20";
      }
      if (firstNumSplit[1] === "u") {
        var firstNum = "21";
      }
      if (firstNumSplit[1] === "v") {
        var firstNum = "22";
      }
      if (firstNumSplit[1] === "w") {
        var firstNum = "23";
      }
      if (firstNumSplit[1] === "x") {
        var firstNum = "24";
      }
      if (firstNumSplit[1] === "y") {
        var firstNum = "25";
      }
      if (firstNumSplit[1] === "z") {
        var firstNum = "26";
      }

      var secondLetter = Number(firstNum) + shift;
      if (secondLetter > 26) {
        var secondLetter = secondLetter - 26;
      }

      if (secondLetter === 1) {
        var secondLetter = "a";
      }
      if (secondLetter === 2) {
        var secondLetter = "b";
      }
      if (secondLetter === 3) {
        var secondLetter = "c";
      }
      if (secondLetter === 4) {
        var secondLetter = "d";
      }
      if (secondLetter === 5) {
        var secondLetter = "e";
      }
      if (secondLetter === 6) {
        var secondLetter = "f";
      }
      if (secondLetter === 7) {
        var secondLetter = "g";
      }
      if (secondLetter === 8) {
        var secondLetter = "h";
      }
      if (secondLetter === 9) {
        var secondLetter = "i";
      }
      if (secondLetter === 10) {
        var secondLetter = "j";
      }
      if (secondLetter === 11) {
        var secondLetter = "k";
      }
      if (secondLetter === 12) {
        var secondLetter = "l";
      }
      if (secondLetter === 13) {
        var secondLetter = "m";
      }
      if (secondLetter === 14) {
        var secondLetter = "n";
      }
      if (secondLetter === 15) {
        var secondLetter = "o";
      }
      if (secondLetter === 16) {
        var secondLetter = "p";
      }
      if (secondLetter === 17) {
        var secondLetter = "q";
      }
      if (secondLetter === 18) {
        var secondLetter = "r";
      }
      if (secondLetter === 19) {
        var secondLetter = "s";
      }
      if (secondLetter === 20) {
        var secondLetter = "t";
      }
      if (secondLetter === 21) {
        var secondLetter = "u";
      }
      if (secondLetter === 22) {
        var secondLetter = "v";
      }
      if (secondLetter === 23) {
        var secondLetter = "w";
      }
      if (secondLetter === 24) {
        var secondLetter = "x";
      }
      if (secondLetter === 25) {
        var secondLetter = "y";
      }
      if (secondLetter === 26) {
        var secondLetter = "z";
      }
}


  
    //Show result
 
    //Combine  letters
    var Answer = firstLetter + secondLetter;
     
    alert("Your Answer is " +  Answer);
    document.getElementById("Answer").innerHTML = "Your Answer is " + Answer;
}
