function validateForm(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!nameInput.checkValidity() || !emailInput.checkValidity() || !messageInput.checkValidity()) {
        alert('Please fill out all required fields correctly.');
        event.preventDefault(); // Prevent form submission if validation fails
    }
}
function myFunction(){
    alert("hi");
}