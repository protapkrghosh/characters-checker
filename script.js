// Returns the input and output of the operator
function mindGame(number) {
    const multiplyNumber = number * 3;
    const sumNumber = multiplyNumber + 10;
    const divided = sumNumber / 2;
    const subNumber = divided - 5;

    return subNumber;
}
const inputNumber = 33;
const output = mindGame(inputNumber);
console.log(output);





// Count the total number of characters in the String
function evenOdd(inputString) {
    let countNumber = inputString.length;
    if(countNumber % 2 == 0) {
        return "even";
    }
    else if(countNumber % 2 == 1) {
        return "odd";
    }
    else {
        return "Please, input a string value";
    }

}
let value = "chatgpt";
let outputValue = evenOdd(value);
console.log(outputValue);







// Find the difference between small and large numbers
function isLGSeven(numberValue) {
    const lessThan = 7;
    if(numberValue <= lessThan) {
        return numberValue;
    }
    else if(numberValue >= lessThan) {
        const greaterThan = numberValue * 2;
        return greaterThan;
    }
    else {
        return "Please, input number value"
    }
}
const visual = 8;
const differenceValue = isLGSeven(visual);
console.log(differenceValue);









// check positive and negative numbers in the function


