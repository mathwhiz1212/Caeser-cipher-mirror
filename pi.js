function pi() {
var string = 'aabsssd';
var chars = new Array();

for(i = strlen(string); 
for(var i = 0; i < string.length; i++){
    var chard = string.charAt(i);
    if(chars[chard] == undefined){
        chars[chard] = 0;
    }
    chars[chard]++;
}
console.log(chars);

}
