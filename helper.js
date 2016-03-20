//Licensed under the Apache License 2.0. See license file for information.
function question() {
"use strict";
  var firstNum = "initial";
  var SecondNum = "initial";
  var Answer = "initial";
  var letters = /^[A-Za-z]+$/;

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

  var SecondNum = Number(prompt("Please enter the shift."));

 if (firstNum === "a") {
    var firstNum = 1;
  }
  if (firstNum === "b") {
    var firstNum = "2";
  }
  if (firstNum === "c") {
    var firstNum = "3";
  }
  if (firstNum === "d") {
    var firstNum = "4";
  }
  if (firstNum === "e") {
    var firstNum = "5";
  }
  if (firstNum === "f") {
    var firstNum = "6";
  }
  if (firstNum === "g") {
    var firstNum = "7";
  }
  if (firstNum === "h") {
    var firstNum = "8";
  }
  if (firstNum === "i") {
    var firstNum = "9";
  }
  if (firstNum === "j") {
    var firstNum = "10";
  }
  if (firstNum === "k") {
    var firstNum = "11";
  }
  if (firstNum === "l") {
    var firstNum = "12";
  }
  if (firstNum === "m") {
    var firstNum = "13";
  }
  if (firstNum === "n") {
    var firstNum = "14";
  }
  if (firstNum === "o") {
    var firstNum = "15";
  }
  if (firstNum === "p") {
    var firstNum = "16";
  }
  if (firstNum === "q") {
    var firstNum = "17";
  }
  if (firstNum === "r") {
    var firstNum = "18";
  }
  if (firstNum === "s") {
    var firstNum = "19";
  }
  if (firstNum === "t") {
    var firstNum = "20";
  }
  if (firstNum === "u") {
    var firstNum = "21";
  }
  if (firstNum === "v") {
    var firstNum = "22";
  }
  if (firstNum === "w") {
    var firstNum = "23";
  }
  if (firstNum === "x") {
    var firstNum = "24";
  }
  if (firstNum === "y") {
    var firstNum = "25";
  }
  if (firstNum === "z") {
    var firstNum = "26";
  }

var Answer = Number(firstNum) + SecondNum;
  if (Answer > 26) {
    var Answer = Answer - 26;
  }

  if (Answer === 1) {
    var Answer = "a";
  }
  if (Answer === 2) {
    var Answer = "b";
  }
  if (Answer === 3) {
    var Answer = "c";
  }
  if (Answer === 4) {
    var Answer = "d";
  }
  if (Answer === 5) {
    var Answer = "e";
  }
  if (Answer === 6) {
    var Answer = "f";
  }
  if (Answer === 7) {
    var Answer = "g";
  }
  if (Answer === 8) {
    var Answer = "h";
  }
  if (Answer === 9) {
    var Answer = "i";
  }
  if (Answer === 10) {
    var Answer = "j";
  }
  if (Answer === 11) {
    var Answer = "k";
  }
  if (Answer === 12) {
    var Answer = "l";
  }
  if (Answer === 13) {
    var Answer = "m";
  }
  if (Answer === 14) {
    var Answer = "n";
  }
  if (Answer === 15) {
    var Answer = "o";
  }
  if (Answer === 16) {
    var Answer = "p";
  }
  if (Answer === 17) {
    var Answer = "q";
  }
  if (Answer === 18) {
    var Answer = "r";
  }
  if (Answer === 19) {
    var Answer = "s";
  }
  if (Answer === 20) {
    var Answer = "t";
  }
  if (Answer === 21) {
    var Answer = "u";
  }
  if (Answer === 22) {
    var Answer = "v";
  }
  if (Answer === 23) {
    var Answer = "w";
  }
  if (Answer === 24) {
    var Answer = "x";
  }
  if (Answer === 25) {
    var Answer = "y";
  }
  if (Answer === 26) {
    var Answer = "z";
  }

  alert("Your letter is " +  Answer);
  document.getElementById("Answer").innerHTML = "Your letter is " + Answer;
}
