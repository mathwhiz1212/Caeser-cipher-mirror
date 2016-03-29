var string = "aabb"

function getFrequency2(string, cutOff) {
var string = "aaaabbb"
  var cleanString = string.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,""),
      words = cleanString.split(' '),
      frequencies = {},
      word, frequency, i;

  for( i=0; i<words.length; i++ ) {
    word = words[i];
    frequencies[word] = frequencies[word] || 0;
    frequencies[word]++;
  }
  
  words = Object.keys( frequencies );
  return words.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0,cutOff).toString();
alert(frequencies[b]);
}

document.write( getFrequency2( "1 2 1 2 3 1 2 3 1 1 4 test", 3  ) ); 


