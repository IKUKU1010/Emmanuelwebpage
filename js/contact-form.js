document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect the form data
    var fullName = document.getElementById('fname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('txtarea').value;
    var priority = document.getElementById('message-priority').value;

    // Send the email using EmailJS
    emailjs.send("service_t30vpyd", "template_fbmanp9", {
        full_name: fullName,
        email: email,
        message: message,
        priority: priority
    })
    .then(function(response) {
        alert('SUCCESS!', response.status, response.text);
    }, function(error) {
        alert('FAILED...', error);
    });
});