"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function encipher() {
  var letterPos = "";
  var alphabet = "";
  var userInput = "";
  var shiftNum = "";
//Letters regex
  var LetterReg = /^[A-Za-z]+$/;
//Number regex
  var numReg = /^\d+$/;
  var i = "0";
  var Answer = "";
//whitespace regex
  var space = /\s/;

    //Get input

    var userInput = document.getElementById("userInput").value;
    var shiftNum = document.getElementById("shiftNum").value;
    //Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php

    if (userInput.match(LetterReg))
    {
      //Do nothing.
    }
    else
    {
      //Tells them to enter only letters with no caps, spaces or punctuation.

      alert("Please enter only letters, no caps, spaces or punctuation in message field.");
    }

if (shiftNum.match(numReg))
    {
      //Do nothing.
    }
    else
    {
      //Tells them to enter only numbers.

      alert("Please enter only numbers in the shift field.");
    }
    //Gets input length.

    var inputLength = userInput.length;


    //Splits input into an array.

    var inputSplit = userInput.split("");

  //Encipher

    for (i = 0; i < inputLength; i++) {

      if (inputSplit[i] === "a") {
        var userInput = 1;
      }
      if (inputSplit[i] === "b") {
        var userInput = "2";
      }
      if (inputSplit[i] === "c") {
        var userInput = "3";
      }
      if (inputSplit[i] === "d") {
        var userInput = "4";
      }
      if (inputSplit[i] === "e") {
        var userInput = "5";
      }
      if (inputSplit[i] === "f") {
        var userInput = "6";
      }
      if (inputSplit[i] === "g") {
        var userInput = "7";
      }
      if (inputSplit[i] === "h") {
        var userInput = "8";
      }
      if (inputSplit[i] === "i") {
        var userInput = "9";
      }
      if (inputSplit[i] === "j") {
        var userInput = "10";
      }
      if (inputSplit[i] === "k") {
        var userInput = "11";
      }
      if (inputSplit[i] === "l") {
        var userInput = "12";
      }
      if (inputSplit[i] === "m") {
        var userInput = "13";
      }
      if (inputSplit[i] === "n") {
        var userInput = "14";
      }
      if (inputSplit[i] === "o") {
        var userInput = "15";
      }
      if (inputSplit[i] === "p") {
        var userInput = "16";
      }
      if (inputSplit[i] === "q") {
        var userInput = "17";
      }
      if (inputSplit[i] === "r") {
        var userInput = "18";
      }
      if (inputSplit[i] === "s") {
        var userInput = "19";
      }
      if (inputSplit[i] === "t") {
        var userInput = "20";
      }
      if (inputSplit[i] === "u") {
        var userInput = "21";
      }
      if (inputSplit[i] === "v") {
        var userInput = "22";
      }
      if (inputSplit[i] === "w") {
        var userInput = "23";
      }
      if (inputSplit[i] === "x") {
        var userInput = "24";
      }
      if (inputSplit[i] === "y") {
        var userInput = "25";
      }
      if (inputSplit[i] === "z") {
        var userInput = "26";
      }

      var letter = Number(userInput) + Number(shiftNum) - 1;
      if (letter > 25) {
        var letter = letter - 26;
      }
      alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      letterPos = alphabet[letter];

      //Combines  letters

      var Answer = Answer + letterPos;
}

    //Show result

    alert("Your secret message is " +  Answer);
    document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;
}
