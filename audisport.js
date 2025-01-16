document.getElementById('buyButton').addEventListener('click', function(event) {
    event.preventDefault(); 
    var email = prompt('Please enter your email address:');
    if (email) {
        if (email.endsWith('@')) {
            var confirmation = confirm('Are you sure you want to proceed with the purchase?');
            if (confirmation) {
                alert('Thank you for your purchase! A confirmation email will be sent to ' + email);  
            } else {
                alert('Purchase canceled.');
            }
        } else {
            alert('Please enter a valid gmail account ending with @');
        }
    } else {
        alert('Email is required to proceed.');
    }
});