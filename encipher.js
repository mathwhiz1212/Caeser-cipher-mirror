"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function encipher() {
  var il = "0";
  var hh = "";
  var letterPos = "";
  var alphabet = "";
  var userInput = "";
  var shiftNum = "";
  var LetterReg = /^[A-Za-z]+$/;
  var numReg = /^\d+$/;
  var Answer = "";
  var spaceReg = /\s/;
  var inputLength = "";
  var inputSplit = "";
  var i = "0";

  //Get input

  var userInput = document.getElementById("userInput").value;
  var shiftNum = document.getElementById("shiftNum").value;

  //Gets input length.

  var inputLength = userInput.length;


  //Splits input into an array.

  var inputSplit = userInput.split("");


  alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 for (il = 0; il < inputLength; il++) {

    for (i = 0; i < 26; i++) {
      // var i1 = i - 1
      if (inputSplit[il] === alphabet[i]) { //-1
        console.log(inputSplit[il]);
        console.log(i);
        var letter = Number(i) + Number(shiftNum);
        if (letter > 25) {
          var letter = letter - 26;
          
        }
        letterPos = alphabet[letter];
        var Answer = Answer + letterPos;
        break;
      }
//alert();
    }

    //Combines  letters

  }

  //Show result
  alert("Your secret message is " +  Answer);
  document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;

}


//Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php

//     if (userInput.match(LetterReg))
//     {
//       //Do nothing.
//     }
//     else
//     {
//       //Tells them to enter only letters with no caps, spaces or punctuation.
//
//       alert("Please enter only letters, no caps, spaces or punctuation in message field.");
//     }
//
// if (shiftNum.match(numReg))
//     {
//       //Do nothing.
//     }
//     else
//     {
//       //Tells them to enter only numbers.
//
//       alert("Please enter only numbers in the shift field.");
//     }
