
//Arrays that represent the character base for this cipher
//Cipher has to be 83 characters long to be compatible
console.log("update")
var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];
var tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];

//temporary destination for multChars
var tempChars = [];

//variable which temporarily holds multiplied array
var multChars = [];
var numArry = [];

var randomizeArray = [];

var validKey = false;
var keyBool = false;

var lengthChars = chars.length;
console.log(lengthChars)

var testAns = "";


var changee = 'a'
var index1;
var changeT = 'f';
var indexT1;

var output = document.getElementById("output").innerHTML;

var singleKey = document.getElementById('singleKey').value;
//dom variables
var change1 = '';
var change2 = '';
var change3 = '';
var change4 = '';
var change5 = '';

var changeT1 = '';
var changeT2 = '';
var changeT3 = '';
var changeT4 = '';
var changeT5 = '';

// var number = document.getElementById("number").value;
var num1;
var num2;

var intext = document.getElementById("intext").value;
var setKey = document.getElementById('setKey').innerHTML;