function sortStringAlphabetically(inputString) {
    // Convert the input string to an array of characters
    let charArray = inputString.split('');

    // Sort the array of characters alphabetically
    charArray.sort();

    // Join the sorted characters back into a string
    let sortedString = charArray.join('');

    return sortedString;
}

// Example usage:
let inputString = prompt("type your string: ");
let sortedOutput = alert(sortStringAlphabetically(inputString));
console.log(`Input String: ${inputString}`);
console.log(`Sorted Output: ${sortedOutput}`);
