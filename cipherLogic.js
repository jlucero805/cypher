//all encompassing function that randomizes every global variable and produces new key
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
    
    tChars = [...chars];

    resetChangeVariables();

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
    setChangeVariables();


    document.getElementById('setKey').innerHTML = "key: " + change1 + change2 + change3 + change4 + change5 + " " + changeT1 + changeT2 + changeT3 + changeT4 + changeT5 + " " + num1 + " " + num2;

    useChangeVariables();
    console.log(chars)
    // shiftFor();
    multiplyFor();
    
    tempChars = [...multChars];
    tChars = [...multChars];
    document.getElementById("randGen").blur();

};

//function that gets text and creates cipher text
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

//uses key to create plain text
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

//Function that multiplies all of the characters to create new array based on key
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