"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function encipher() {

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

    //Get length of input.

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

      var letter = Number(userInput) + Number(shiftNum);
      if (letter > 26) {
        var letter = letter - 26;
      }

      if (letter === 1) {
        var letter = "a";
      }
      if (letter === 2) {
        var letter = "b";
      }
      if (letter === 3) {
        var letter = "c";
      }
      if (letter === 4) {
        var letter = "d";
      }
      if (letter === 5) {
        var letter = "e";
      }
      if (letter === 6) {
        var letter = "f";
      }
      if (letter === 7) {
        var letter = "g";
      }
      if (letter === 8) {
        var letter = "h";
      }
      if (letter === 9) {
        var letter = "i";
      }
      if (letter === 10) {
        var letter = "j";
      }
      if (letter === 11) {
        var letter = "k";
      }
      if (letter === 12) {
        var letter = "l";
      }
      if (letter === 13) {
        var letter = "m";
      }
      if (letter === 14) {
        var letter = "n";
      }
      if (letter === 15) {
        var letter = "o";
      }
      if (letter === 16) {
        var letter = "p";
      }
      if (letter === 17) {
        var letter = "q";
      }
      if (letter === 18) {
        var letter = "r";
      }
      if (letter === 19) {
        var letter = "s";
      }
      if (letter === 20) {
        var letter = "t";
      }
      if (letter === 21) {
        var letter = "u";
      }
      if (letter === 22) {
        var letter = "v";
      }
      if (letter === 23) {
        var letter = "w";
      }
      if (letter === 24) {
        var letter = "x";
      }
      if (letter === 25) {
        var letter = "y";
      }
      if (letter === 26) {
        var letter = "z";
      }

      //Combines  letters

      var Answer = Answer + letter;
}

    //Show result

    alert("Your secret message is " +  Answer);
    document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;
}
