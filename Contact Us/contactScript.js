function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var isValid = true;

    // Placeholder for error messages
    var errorMessagePlaceholder = document.getElementById('error-message');
    // Clear previous error messages
    errorMessagePlaceholder.innerHTML = '';

    // Validate name
    if (name === '') {
        errorMessagePlaceholder.innerHTML += 'Please enter your name.<br>';
        document.getElementById('name').focus();
        isValid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errorMessagePlaceholder.innerHTML += 'Please enter a valid email address.<br>';
        document.getElementById('email').focus();
        isValid = false;
    }

    // Validate message
    if (message === '') {
        errorMessagePlaceholder.innerHTML += 'Please enter your message.<br>';
        document.getElementById('message').focus();
        isValid = false;
    }

    // If form is valid, submit the form
    if (isValid) {
        // Here you can implement success handling, such as displaying a success message or redirecting to a confirmation page
        var successMessagePlaceholder = document.getElementById('success-message');
        successMessagePlaceholder.innerHTML = 'Your message has been successfully submitted. Thank you!';
        
        // Optionally, clear the form fields after successful submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        // Prevent form submission if validation fails
        event.preventDefault(); // Prevent default form submission
    }

    return isValid;
}
