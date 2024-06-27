function displayDateTime() {
    const now = new Date();
    
    // Get parts of the date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    const timeString = `${hours}:${minutes} ${ampm}`;

    // Format the string as "Today's date is August 10th, 2023 and time is 11:11 AM."
    const formattedString = `Today's date is ${dateString} and time is ${timeString}.`;

    document.getElementById('date-time').textContent = formattedString;
}

// Call the function to display the date and time immediately
displayDateTime();

// Optional: Update the date and time every minute (60000 milliseconds)
setInterval(displayDateTime, 60000);
