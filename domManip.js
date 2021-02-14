//change dom elements to open instructions
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
    document.getElementById("textAr").style.display = "none";
    document.getElementById("staticOutput").style.display = "none";
    document.getElementById("textAreaButton").style.display = "none";

    document.getElementById("instructionBody").style.display = "initial";
    document.getElementById("instructionWriting").style.display = "initial";

};

//turn off all elements besides main tab elements
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
    document.getElementById("staticOutput").style.display = "initial";
    document.getElementById("outputContainer").style.display = "inline-block";
    document.getElementById("textAr").style.display = "initial";
    document.getElementById("textAreaButton").style.display = "initial";

    document.getElementById("wrapper").style.display = "none";
    document.getElementById("instructionBody").style.display = "none";
};

function selectAllText() {
    document.getElementById("textAr").select();
    document.getElementById("textAreaButton").blur();
};