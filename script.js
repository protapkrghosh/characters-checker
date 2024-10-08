// Problem 1
// Returns the input and output of the operator
function mindGame(number) {
    const multiplyNumber = number * 3;
    const sumNumber = multiplyNumber + 10;
    const divided = sumNumber / 2;
    const subNumber = divided - 5;
    if(sumNumber > 0) {
        return subNumber;
    }
    else {
        return "Please, input a positive number"
    }
}
const inputNumber = 33;
const output = mindGame(inputNumber);
console.log(output);




// Problem 2
// Count the total number of characters in the String
/* function evenOdd(inputString) {
    let countNumber = inputString.length;
    if(countNumber % 2 == 0) {
        return "even";
    }
    else if(countNumber % 2 !== 0) {
        return "odd";
    }
    else {
        return "Please, input a string value";
    }

}
let value = "phero";
let outputValue = evenOdd(value);
console.log(outputValue); */


// Right solution Problem 2
function evenOdd(inputString) {
    let countNumber = inputString.length;
    if(countNumber % 2 == 0 && typeof inputString == "string") {
        return "even";
    }
    else if(countNumber % 2 !== 0 && typeof inputString == "string") {
        return "odd";
    }
    else {
        return "Please, input a string value";
    }

}
let value = false;
let outputValue = evenOdd(value);
console.log(outputValue);






// Problem 3
// Find the difference between small and large numbers
function isLGSeven(numberValue) {
    const lessThan = 7;
    if(numberValue < lessThan) {
        const subtractionValue = numberValue - lessThan;
        return subtractionValue;
    }
    else if(numberValue >= lessThan) {
        const greaterThan = numberValue * 2;
        return greaterThan;
    }
    else {
        return "Please, input number value"
    }
}
const visual = 6;
const differenceValue = isLGSeven(visual);
console.log(differenceValue);






// Problem 4
// check positive and negative numbers in the function
function findingBadData(peopleAge) {
    let badDataCount = 0;
    for (let i = 0; i < peopleAge.length; i++) {
        if (peopleAge[i] < 0) {
            badDataCount++;
        }
    }
    return badDataCount;
}
let peopleAge = [-6, 25, 45, -9, -20, -45, -565];
let negativeNumber = findingBadData(peopleAge);
console.log(negativeNumber);




// Problem 5
// Convert gems into diamond
function gemsToDiamond(firstFriGems, secondFriGems, thirdFriGems) {
    const gemsPower1 = firstFriGems * 21;
    const gemsPower2 = secondFriGems * 32;
    const gemsPower3 = thirdFriGems * 43;

    const totalGemsPowers = gemsPower1 + gemsPower2 + gemsPower3;
    if(totalGemsPowers < 1000*2) {
        return totalGemsPowers;
    }
    else if(totalGemsPowers >= 1000*2) {
        const largeGemsPower = totalGemsPowers - 2000;
        return largeGemsPower;
    }
    else {
        return "Please, input all variable number value"
    }
}

const inputDiamond = gemsToDiamond(20, 200, 50);
console.log(inputDiamond);