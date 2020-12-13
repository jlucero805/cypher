var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"','<','>'];
var tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"','<','>'];
var tempChars = [];
var multChars = [];
var numArry = [];

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
function activate() {
    tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"','<','>'];

    change1 = '';
    change2 = '';
    change3 = '';
    change4 = '';
    change5 = '';

    changeT1 = '';
    changeT2 = '';
    changeT3 = '';
    changeT4 = '';
    changeT5 = '';

    singleKey = document.getElementById('singleKey').value;

    change1 = singleKey[0];
    change2 = singleKey[1];
    change3 = singleKey[2];
    change4 = singleKey[3];
    change5 = singleKey[4];

    changeT1 = singleKey[6];
    changeT2 = singleKey[7];
    changeT3 = singleKey[8];
    changeT4 = singleKey[9];
    changeT5 = singleKey[10];

    num1 = Number(document.getElementById('num1').value);
    if (num1 >= 83) {
        num1 = 82;
    };
    console.log(num1)
    num2 = Number(document.getElementById('num2').value);


    document.getElementById('setKey').innerHTML = "key: " + change1 + change2 + change3 + change4 + change5 + " " + changeT1 + changeT2 + changeT3 + changeT4 + changeT5 + " " + num1 + " " + num2;

    intakeLetters(change1, changeT1);
    intakeLetters(change2, changeT2);
    intakeLetters(change3, changeT3);
    intakeLetters(change4, changeT4);
    intakeLetters(change5, changeT5);
    console.log(chars)
    // shiftFor();
    multiplyFor();
    
    tempChars = multChars;
    console.log(tempChars)
    tChars = multChars;
    console.log(tChars)
    console.log(chars)
};

function removeSetKeyInput(){
    
};

function encypher() {
    intext = document.getElementById("intext").value;

    finalResult();
    document.getElementById("intext").value = '';
};

function decypher() {
    intext = document.getElementById("intext").value;
    
    tChars = tempChars;
    
    finalResult2();
    document.getElementById("intext").value = '';

};


//teststart

function multiplyFor() {
    numArry = [];
    console.log(num1)
    console.log(num2)
    for (let i = 0; i < lengthChars; i++) {
        var x = (i * num1) + num2;
        numArry.push(x % lengthChars);
    };
    console.log(numArry)
    for (x of numArry) {
        multChars.push(chars[x]);
    };
    console.log(multChars)
};

//testend

function intakeLetters(x, y) {
    index1 = chars.indexOf(x);
    indexT1 = chars.indexOf(y);
    var tempValue = tChars[index1];
    tChars[index1] = tChars[indexT1];
    tChars[indexT1] = tempValue;
};


function finalResult() {
    var tempLength = intext.length;
    testAns = "";
    for (let i=0; i<tempLength; i++) {
        
        var tempInd1 = chars.indexOf(intext[i]);
        testAns += tChars[tempInd1];
    };
    document.getElementById('output').innerHTML = 'output: ' + testAns;
};

function finalResult2() {
    var tempLength = intext.length;
    testAns = "";
    for (let i=0; i<tempLength; i++) {
        
        var tempInd1 = tChars.indexOf(intext[i]);
        testAns += chars[tempInd1];
    };
    document.getElementById('output').innerHTML = 'output: ' + testAns;
};

// main{
    

    
//};