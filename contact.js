function validateForm() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    let errorMessage = '';

    
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
        errorMessage = 'All fields are required!';
        document.getElementById('formMessage').innerText = errorMessage;
        return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage = 'Please enter a valid email address.';
        document.getElementById('formMessage').innerText = errorMessage;
        return false;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        errorMessage = 'Please enter a valid phone number (10 digits).';
        document.getElementById('formMessage').innerText = errorMessage;
        return false;
    }

    
    document.getElementById('formMessage').innerText = 'Thank you for contacting Audi Dealership! We will get back to you soon.';
    return true;
}