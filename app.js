var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];
var tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];
var tempChars = [];
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
function activate() {
    var keyLength = document.getElementById("singleKey").value.length;
    var num1Length = document.getElementById("num1").value.length;
    var num2Length = document.getElementById("num2").value.length

    if (keyLength == 11 && num1Length >=1 && num2Length >= 1) {
        tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];

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
        keyBool = false;
        for (let i = 0; i<11; i++) {
            for (let j = i + 1; j<11; j++) {
                if (singleKey[i] == singleKey[j]) {
                    keyBool = true;
                };
            };
        };
        if (keyBool) {
            
            document.getElementById("setKey").innerHTML = "key: Invalid Key";
            validKey = false;
        } else {
            
            validKey = true;
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
            document.getElementById("keySetterButton").blur();
            };



        

        
    } else {
        document.getElementById("setKey").innerHTML = "key: Invalid Key";
        validKey = false;
        document.getElementById("keySetterButton").blur();
    };
    
    
    
};

function randomize() {
    singleKey = "";
    num1 = null;
    num2 = null;
    var tempArray = [];
    for (let i=0; i<83; i++) {
        tempArray.push(i);
    };
    randomizeArray = [];
    for (let i=0; i<11; i++) {
        var temp = Math.floor(Math.random() * (83 - i) );
        randomizeArray.push(tempArray[temp]);
        tempArray.splice(temp, 1);

    };
    
    tChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","@","#","$","%","^","&","*","?",'.',',','_',' ','~','`','-','+',"'", '"',';',':'];

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

    for (let i=0; i<5; i++) {
        singleKey += chars[randomizeArray[i]];
    };
    singleKey += ' ';
    for (let i=6; i<11; i++) {
        singleKey += chars[randomizeArray[i]];
    };
    document.getElementById('singleKey').value = singleKey;

    num1 = Math.floor(Math.random() * (83 - 1) + 1 );
    document.getElementById('num1').value = num1;
    num2 = Math.floor(Math.random() * (999 - 1) + 1);
    document.getElementById('num2').value = num2;
    console.log(singleKey);
    validKey = true;
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
    document.getElementById("randGen").blur();

};





function encypher() {
    if (validKey) {
        intext = document.getElementById("intext").value;
        document.getElementById("cyph").blur();
        finalResult();
        document.getElementById("intext").value = '';
    } else {
        document.getElementById("textAr").value = "enter valid key";
        document.getElementById("cyph").blur();
    };
    
    
};

function decypher() {
    if (validKey) {
        intext = document.getElementById("intext").value;
        tChars = tempChars;
        finalResult2();
        document.getElementById("intext").value = '';
        document.getElementById("decyph").blur();
    } else {
        document.getElementById("textAr").value = "enter valid key";
        document.getElementById("decyph").blur();
    };
        
};




//teststart

function multiplyFor() {
    numArry = [];
    multChars = [];
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
    document.getElementById('textAr').value = testAns;
};

function finalResult2() {
    var tempLength = intext.length;
    testAns = "";
    for (let i=0; i<tempLength; i++) {
        
        var tempInd1 = tChars.indexOf(intext[i]);
        testAns += chars[tempInd1];
    };
    document.getElementById('textAr').value = testAns;
};

function instructionTab() {
    document.getElementById("cypherTab").style.backgroundColor = "white";
    document.getElementById("instructions").blur();
    document.getElementById("instructions").style.backgroundColor = "rgb(255, 210, 210)";
    document.getElementById("outputContainer").style.display = "none";
    document.getElementById("singleKey").style.display = "none";
    document.getElementById("num1").style.display = "none";
    document.getElementById("num2").style.display = "none";
    document.getElementById("keySetterButton").style.display = "none";
    document.getElementById("setKey").style.display = "none";
    document.getElementById("intext").style.display = "none";
    document.getElementById("cyph").style.display = "none";
    document.getElementById("decyph").style.display = "none";
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("instructionBody").style.display = "initial";
    document.getElementById("instructionWriting").style.display = "initial";
    document.getElementById("textAr").style.display = "none";
    document.getElementById("staticOutput").style.display = "none";
    document.getElementById("textAreaButton").style.display = "none";

};

function mainTab() {
    document.getElementById("cypherTab").style.backgroundColor = "rgb(255, 210, 210)";
    document.getElementById("cypherTab").blur();
    document.getElementById("instructions").style.backgroundColor = "white";
    document.getElementById("outputContainer").style.display = "initial";
    document.getElementById("singleKey").style.display = "initial";
    document.getElementById("num1").style.display = "initial";
    document.getElementById("num2").style.display = "initial";
    document.getElementById("keySetterButton").style.display = "initial";
    document.getElementById("setKey").style.display = "initial";
    document.getElementById("intext").style.display = "initial";
    document.getElementById("cyph").style.display = "initial";
    document.getElementById("decyph").style.display = "initial";
    document.getElementById("wrapper").style.display = "none";
    document.getElementById("staticOutput").style.display = "initial";
    document.getElementById("outputContainer").style.display = "inline-block";
    document.getElementById("instructionBody").style.display = "none";
    document.getElementById("textAr").style.display = "initial";
    document.getElementById("textAreaButton").style.display = "initial";
};

function selectAllText() {
    document.getElementById("textAr").select();
    document.getElementById("textAreaButton").blur();
};
// main{
    

    
//};