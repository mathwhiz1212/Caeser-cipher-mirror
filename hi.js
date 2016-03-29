var userText = "eeeeeefff";
var nuText = userText;
var alphaCheck = /^[A-Za-z]+$/;
function alphaOnly(userText) {
    //result = nuText.split("");
    var alphaCheck = /[a-zA-Z]/g; //using RegExp create variable to have only      alphabetic characters
    var alphaResult = nuText.match(alphaCheck); //get object with only alphabetic matches from  original string
    alphaResult.sort();
    var result = freqLet(alphaResult);
    document.write(countlist);
alert(countlist);
alert(alphaResult[1]);
}


function freqLet (alphaResult){
  var count = {};
  countlist = {alphaResult:count};
  for (i = 0; i < alphaResult.length; i++){
    var character = alphaResult.charAt(i);
    if (count[character]) {
       count[character]++;
    } else {
       count[character] = 1;
    }
  }
}

