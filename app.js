
//main Function
function activate() {
    var keyLength = document.getElementById("singleKey").value.length;
    var num1Length = document.getElementById("num1").value.length;
    var num2Length = document.getElementById("num2").value.length

    if (keyLength == 11 && num1Length >=1 && num2Length >= 1) {
        tChars = [...chars];

        resetChangeVariables();

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
            setChangeVariables()

            num1 = Number(document.getElementById('num1').value);
            if (num1 >= 83) {
                num1 = 82;
            };
            console.log(num1)
            num2 = Number(document.getElementById('num2').value);


            document.getElementById('setKey').innerHTML = "key: " + change1 + change2 + change3 + change4 + change5 + " " + changeT1 + changeT2 + changeT3 + changeT4 + changeT5 + " " + num1 + " " + num2;

            useChangeVariables()

            // shiftFor();
            multiplyFor();
            
            tempChars = [...multChars];
            tChars = [...multChars];
            document.getElementById("keySetterButton").blur();
            };
    } else {
        document.getElementById("setKey").innerHTML = "key: Invalid Key";
        validKey = false;
        document.getElementById("keySetterButton").blur();
    };
    
    
    
};