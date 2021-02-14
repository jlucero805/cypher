//reset global change variables back to none
function resetChangeVariables() {
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
};

//set the change variables to the key input
function setChangeVariables() {
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
};

//intakeLetters to change the given letters in array based on key
function useChangeVariables() {
    intakeLetters(change1, changeT1);
    intakeLetters(change2, changeT2);
    intakeLetters(change3, changeT3);
    intakeLetters(change4, changeT4);
    intakeLetters(change5, changeT5);
};