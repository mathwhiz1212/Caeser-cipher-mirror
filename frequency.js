"use strict";
//Licensed under the Apache License 2.0. See license file for information.

function encipher() {

  var userInput = "";
  //Letters regex
  var LetterReg = /^[A-Za-z]+$/;
  var i = "0";
  var Answer = "";
  var shiftNum = "";
  //whitespace regex
  var space = /\s/;
  var a = "0";
  var b = "0";
  var c = "0";
  var d = "0";
  var e = "0";
  var f = "0";
  var g = "0";
  var h = "0";
  var ii = "0";
  var j = "0";
  var k = "0";
  var l = "0";
  var m = "0";
  var n = "0";
  var o = "0";
  var p = "0";
  var q = "0";
  var r = "0";
  var s = "0";
  var t = "0";
  var u = "0";
  var v = "0";
  var w = "0";
  var x = "0";
  var y = "0";
  var z = "0";

  //Get input

  var userInput = document.getElementById("userInput").value;

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

  //Get length of input.

  var inputLength = userInput.length;

  //Splits input into an array.

  var inputSplit = userInput.split("");

  //Encipher

  for (i = 0; i < inputLength; i++) {

    if (inputSplit[i] === "a") {
      var a = Number(a) + 1;
    }
    if (inputSplit[i] === "b") {
      var b = Number(b) + 1;
    }
    if (inputSplit[i] === "c") {
      var c = Number(c) + 1;
    }
    if (inputSplit[i] === "d") {
      var d = Number(d) + 1;
    }
    if (inputSplit[i] === "e") {
      var e = Number(e) + 1;
    }
    if (inputSplit[i] === "f") {
      var f = Number(f) + 1;
    }
    if (inputSplit[i] === "g") {
      var g = Number(g) + 1;
    }
    if (inputSplit[i] === "h") {
      var h = Number(h) + 1;
    }
    if (inputSplit[i] === "i") {
      var ii = Number(ii) + 1;
    }
    if (inputSplit[i] === "j") {
      var j = Number(j) + 1;
    }
    if (inputSplit[i] === "k") {
      var k = Number(k) + 1;
    }
    if (inputSplit[i] === "l") {
      var l = Number(l) + 1;
    }
    if (inputSplit[i] === "m") {
      var m = Number(m) + 1;
    }
    if (inputSplit[i] === "n") {
      var n = Number(n) + 1;
    }
    if (inputSplit[i] === "o") {
      var o = Number(o) + 1;
    }
    if (inputSplit[i] === "p") {
      var p = Number(p) + 1;
    }
    if (inputSplit[i] === "q") {
      var q = Number(q) + 1;
    }
    if (inputSplit[i] === "r") {
      var r = Number(r) + 1;
    }
    if (inputSplit[i] === "s") {
      var s = Number(s) + 1;
    }
    if (inputSplit[i] === "t") {
      var t = Number(t) + 1;
    }
    if (inputSplit[i] === "u") {
      var u = Number(u) + 1;
    }
    if (inputSplit[i] === "v") {
      var v = Number(v) + 1;
    }
    if (inputSplit[i] === "w") {
      var w = Number(w) + 1;
    }
    if (inputSplit[i] === "x") {
      var x = Number(x) + 1;
    }
    if (inputSplit[i] === "y") {
      var y = Number(y) + 1;
    }
    if (inputSplit[i] === "z") {
      var z = Number(z) + 1;
    }
    math.max
    if (var a > b) {
      var shiftNum = a;
    }
    else
    {
      var shiftNum = b;
    }

    if (var b > c) {
      var shiftNum = b;
    }
    else
    {
      var shiftNum = b;
    }

    alert(a);
    //Combines  letters

    //var Answer = Answer + letter;
  }

  //Show result

  alert("Your secret message is " +  Answer);
  document.getElementById("Answer").innerHTML = "Your secret message is " + Answer;
}
