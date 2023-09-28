// Get the first number from the user
let num1 = parseFloat(prompt("Enter the first number:"));

// Get the second number from the user
let num2 = parseFloat(prompt("Enter the second number:"));

// Check if the input is valid
if (isNaN(num1) || isNaN(num2)) {
    console.log("Invalid input. Please enter valid numbers.");
} else {
    // Calculate and display the multiplication and division results
    let multiplicationResult = alert(num1 * num2);
    let divisionResult =alert(num1 / num2);

    console.log(`Multiplication Result: ${multiplicationResult}`);
    console.log(`Division Result: ${divisionResult}`);
}
