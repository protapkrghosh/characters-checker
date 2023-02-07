// Returns the input and output of the operator
function mindGame(number) {
    const multiplyNumber = number * 3;
    const sumNumber = multiplyNumber + 10;
    const divided = sumNumber / 2;
    const subNumber = divided - 5;

    return subNumber;
}
const inputNumber = 15;
const output = mindGame(inputNumber);
console.log(output);





// Count the total number of characters in the String
function evenOdd(inputString) {
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
console.log(outputValue);







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
const visual = -15;
const differenceValue = isLGSeven(visual);
console.log(differenceValue);









// check positive and negative numbers in the function
/* function findingBadData(datas) {
    if(datas.length >= 0) {
        const goodData = datas.length;
        return goodData;
    }
    else if(datas.length <= 0) {
        const badData = datas.length;
        return badData;
    }
    else {
        console.log("Try agin, Please input a array value")
    }
}
const datas = [-12, 34, -6, 678, -89];
const outputArray = findingBadData(datas);
console.log(outputArray);
*/




/* var arrayNumbers = [23, 34, 45, 56, 67, 39, 78, 98];
for(var i = 0; i < 7; i++) {
    valueNumber = arrayNumbers[i];
    if(valueNumber > 50) {
        continue;
    }
    console.log(valueNumber);
} 
*/




