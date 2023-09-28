function reverseNumber(num) {
    // Convert the number to a string
    let numStr = num.toString();

    // Reverse the string
    let reversedStr = numStr.split('').reverse().join('');

    // Convert the reversed string back to a number
    let reversedNum = parseFloat(reversedStr);

    // Handle negative numbers
    if (num < 0) {
        reversedNum = -reversedNum;
    }

    return reversedNum;
}

// Example usage:
let originalNumber = prompt("type the number that you want to reverse: ");
let reversed = alert(reverseNumber(originalNumber));
console.log(`Original Number: ${originalNumber}`);
console.log(`Reversed Number: ${reversed}`);
