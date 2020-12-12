var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?", '.', ','];
var tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?", '.', ','];

console.log(tChars);

var testValue = "jason";
var testValue2 = "lptxy";
var testAns = "";


var changee = 'a'
var index1;
var changeT = 'f';
var indexT1;

var output = document.getElementById("output").innerHTML;

var singleKey = document.getElementById('singleKey').value;
//dom variables
var change1 = document.getElementById("change1").value;
var change2 = document.getElementById("change1").value;
var change3 = document.getElementById("change1").value;
var change4 = document.getElementById("change1").value;
var change5 = document.getElementById("change1").value;

var changeT1 = document.getElementById("change1").value;
var changeT2 = document.getElementById("change1").value;
var changeT3 = document.getElementById("change1").value;
var changeT4 = document.getElementById("change1").value;
var changeT5 = document.getElementById("change1").value;

var number = document.getElementById("number").value;


var intext = document.getElementById("intext").value;

var setKey = document.getElementById('setKey').innerHTML;
console.log(tChars == chars)
function activate() {
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

    number = document.getElementById('number').value;
    if (number > 26) {
        number %= 26;
    };
    document.getElementById('setKey').innerHTML = "key: " + change1 + change2 + change3 + change4 + change5 + " " + changeT1 + changeT2 + changeT3 + changeT4 + changeT5 + " " + number;
    //"key: " + change1 + change2 + change3 + change4 + change5 + " " + changeT1 + changeT2 + changeT3 + changeT4 + changeT5
    console.log('works')

    intakeLetters(change1, changeT1);
    intakeLetters(change2, changeT2);
    intakeLetters(change3, changeT3);
    intakeLetters(change4, changeT4);
    intakeLetters(change5, changeT5);

    shiftFor();
    console.log(tChars);
   
    
};

function encypher() {
    intext = document.getElementById("intext").value;

    finalResult();
};

function decypher() {
    intext = document.getElementById("intext").value;
    shiftBack();
    intakeLetters(change1, changeT1);
    intakeLetters(change2, changeT2);
    intakeLetters(change3, changeT3);
    intakeLetters(change4, changeT4);
    intakeLetters(change5, changeT5);
    shiftBack();
    intakeLetters(change1, changeT1);
    intakeLetters(change2, changeT2);
    intakeLetters(change3, changeT3);
    intakeLetters(change4, changeT4);
    intakeLetters(change5, changeT5);
    finalResult2();

};

function shiftFor() {
    for (let i=0; i<number; i++) {
        var tempElement = tChars[tChars.length - 1];
        tChars.pop();
        tChars.unshift(tempElement);
        console.log(tChars)
    };
};

function shiftBack() {
    for (let i=0; i<number; i++) {
        var tempElement = tChars[0];
        tChars.shift();
        tChars.push(tempElement);
        console.log(tChars)
    };
};

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
    console.log(testAns)
    document.getElementById('output').innerHTML = 'output: ' + testAns;
};

function finalResult2() {
    var tempLength = intext.length;
    testAns = "";
    for (let i=0; i<tempLength; i++) {
        
        var tempInd1 = chars.indexOf(intext[i]);
        testAns += tChars[tempInd1];
    };
    console.log(testAns)
    document.getElementById('output').innerHTML = 'output: ' + testAns;
};

// main{
    

    
//};