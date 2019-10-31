var regex = /[+-]?\d+(\.\d+)?/g;

var str = '<tag valueA="20.434" valueB="-12.334" />';
var floats = str.match(regex).map(function(v) { return parseFloat(v); });
console.log(floats);

var str2 = '20.434 -12.334';
var floats2 = str2.match(regex).map(function(v) { return parseFloat(v); });
console.log(floats2);

var strWithInt = "200px";
var ints = strWithInt.match(regex).map(function(v) { return parseFloat(v); });
console.log(ints);