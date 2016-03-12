//Licensed under the Apache License 2.0. See license file for information.
function question() {
  var firstNum = Number(prompt("Please enter the number corresponding to the letter of the alphabet."));
  var SecondNum = Number(prompt("Please enter the shift."));
  var Answer = firstNum + SecondNum;
  if (Answer > 26) {
    var Answer = Answer - 26;
  }
  if (Answer == 1) {
    var Answer = "a";
  }
  if (Answer == 2) {
    var Answer = "b";
  }
  if (Answer == 3) {
    var Answer = "c";
  }
  if (Answer == 4) {
    var Answer = "d";
  }
  if (Answer == 5) {
    var Answer = "e";
  }
  if (Answer == 6) {
    var Answer = "f";
  }
  if (Answer == 7) {
    var Answer = "g";
  }
  if (Answer == 8) {
    var Answer = "h";
  }
  if (Answer == 9) {
    var Answer = "i";
  }
  if (Answer == 10) {
    var Answer = "j";
  }
  if (Answer == 11) {
    var Answer = "k";
  }
  if (Answer == 12) {
    var Answer = "l";
  }
  if (Answer == 13) {
    var Answer = "m";
  }
  if (Answer == 14) {
    var Answer = "n";
  }
  if (Answer == 15) {
    var Answer = "o";
  }
  if (Answer == 16) {
    var Answer = "p";
  }
  if (Answer == 17) {
    var Answer = "q";
  }
  if (Answer == 18) {
    var Answer = "r";
  }
  if (Answer == 19) {
    var Answer = "s";
  }
  if (Answer == 20) {
    var Answer = "t";
  }
  if (Answer == 21) {
    var Answer = "u";
  }
  if (Answer == 22) {
    var Answer = "v";
  }
  if (Answer == 23) {
    var Answer = "w";
  }
  if (Answer == 24) {
    var Answer = "x";
  }
  if (Answer == 25) {
    var Answer = "y";
  }
  if (Answer == 26) {
    var Answer = "z";
  }
  alert("Your letter is " +  Answer);
  document.getElementById("Answer").innerHTML = "Your letter is " + Answer;
}
