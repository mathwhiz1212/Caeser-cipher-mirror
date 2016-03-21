"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function helper() {

  var firstNum = "initial";
  var shift = "initial";
  var firstLetter = "initial";
  var letters = /^[A-Za-z]+$/;
  var i = "0";
  var Answer = "";
  
    //Get input
    var firstNum = prompt("Please enter the letter of the alphabet.");
    
    //Checks if input is a letter. Uses a modified version of code found here: http://www.w3resource.com/javascript/form/all-letters-field.php
    
    if (firstNum.match(letters))
    {
      //Do nothing.
    }
    else
    {
      //Tells them to enter only letters.
      alert("Please enter only letters.");
    }
    
    //Get length of input.
    
    var inputLength = firstNum.length;
    
    //Splits input into an array.
    
    var firstNumSplit = firstNum.split(""); 
    
    //Asks for shift.
    
    var shift = Number(prompt("Please enter the shift."));

  //Encipher
  
    for (i = 0; i < inputLength; i++) {
      
      if (firstNumSplit[i] === "a") {
        var firstNum = 1;
      }
      if (firstNumSplit[i] === "b") {
        var firstNum = "2";
      }
      if (firstNumSplit[i] === "c") {
        var firstNum = "3";
      }
      if (firstNumSplit[i] === "d") {
        var firstNum = "4";
      }
      if (firstNumSplit[i] === "e") {
        var firstNum = "5";
      }
      if (firstNumSplit[i] === "f") {
        var firstNum = "6";
      }
      if (firstNumSplit[i] === "g") {
        var firstNum = "7";
      }
      if (firstNumSplit[i] === "h") {
        var firstNum = "8";
      }
      if (firstNumSplit[i] === "i") {
        var firstNum = "9";
      }
      if (firstNumSplit[i] === "j") {
        var firstNum = "10";
      }
      if (firstNumSplit[i] === "k") {
        var firstNum = "11";
      }
      if (firstNumSplit[i] === "l") {
        var firstNum = "12";
      }
      if (firstNumSplit[i] === "m") {
        var firstNum = "13";
      }
      if (firstNumSplit[i] === "n") {
        var firstNum = "14";
      }
      if (firstNumSplit[i] === "o") {
        var firstNum = "15";
      }
      if (firstNumSplit[i] === "p") {
        var firstNum = "16";
      }
      if (firstNumSplit[i] === "q") {
        var firstNum = "17";
      }
      if (firstNumSplit[i] === "r") {
        var firstNum = "18";
      }
      if (firstNumSplit[i] === "s") {
        var firstNum = "19";
      }
      if (firstNumSplit[i] === "t") {
        var firstNum = "20";
      }
      if (firstNumSplit[i] === "u") {
        var firstNum = "21";
      }
      if (firstNumSplit[i] === "v") {
        var firstNum = "22";
      }
      if (firstNumSplit[i] === "w") {
        var firstNum = "23";
      }
      if (firstNumSplit[i] === "x") {
        var firstNum = "24";
      }
      if (firstNumSplit[i] === "y") {
        var firstNum = "25";
      }
      if (firstNumSplit[i] === "z") {
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
      //Combine  letters
      
      var Answer = Answer + secondLetter;
}
  
    //Show result
     
    alert("Your Answer is " +  Answer);
    document.getElementById("Answer").innerHTML = "Your Answer is " + Answer;
}
