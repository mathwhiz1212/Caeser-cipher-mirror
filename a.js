function a() {

var i = "0";

 for (i = 0; i < inputLength; i++) {
     // var i1 = i - 1
      if (inputSplit[i] === alphabet[i]) { //-1

       var letter = Number(i) + Number(shiftNum);
      if (letter > 25) {
        var letter = letter - 26;
      }
      letterPos = alphabet[letter];
  }      

}
}
