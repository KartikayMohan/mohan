function showDateAndTimeIST() {
    // Create a new Date object
    const date = new Date();

    // Get the options for formatting the date and time
    const options = {
        timeZone: 'Asia/Kolkata', // Set the timezone to IST
        hour12: false, // Use 24-hour format
        weekday: 'long', // Display the full weekday name
        year: 'numeric', // Display the year
        month: 'long', // Display the full month name
        day: 'numeric', // Display the day of the month
        hour: '2-digit', // Display the hour in 2-digit format
        minute: '2-digit', // Display the minute in 2-digit format
        second: '2-digit', // Display the second in 2-digit format
    };

    // Format the date and time in IST
    const dateTimeIST = alert(date.toLocaleString('en-US', options));

    // Display the formatted date and time
    console.log(`Date and Time in IST: ${dateTimeIST}`);
}

// Call the function to display the date and time in IST
showDateAndTimeIST();
