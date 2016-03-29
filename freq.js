function freq() {

var string = document.getElementById("userInput").value;


function getFrequency(string) {

    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }

    ds = freq[e];
alert(ds);

}

//https://stackoverflow.com/questions/18619785/counting-frequency-of-characters-in-a-string-using-javascript
}
