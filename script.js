document.addEventListener("DOMContentLoaded", function() {
    var contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form elements
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var subject = document.getElementById("subject");
        var message = document.getElementById("message");
        var errorMessage = document.getElementById("error-message");
        var successMessage = document.getElementById("sent-message");

        // Reset previous error styles
        name.classList.remove('error');
        email.classList.remove('error');
        subject.classList.remove('error');
        message.classList.remove('error');

        // Validate form fields
        if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
            // Display error message
            errorMessage.style.display = "block";

            // Highlight the empty fields
            if (name.value.trim() === '') {
                name.classList.add('error');
            }
            if (email.value.trim() === '') {
                email.classList.add('error');
            }
            if (message.value.trim() === '') {
                message.classList.add('error');
            }
        } else {
            // Hide error message
            errorMessage.style.display = "none";

            // Display success message
            successMessage.style.display = "block";

            // You can submit the form or perform other actions here

            // Reset form after 1 second
            setTimeout(function() {
                contactForm.reset();
                successMessage.style.display = "none";
            }, 1000);
        }
    });
});
