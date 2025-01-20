// Handle Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Form Data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const statusDiv = document.getElementById('form-status');
  
    // Basic Validation: Check if fields are empty
    if (name === '' || email === '' || message === '') {
      statusDiv.textContent = 'Please fill in all fields if you want to continue.';
      statusDiv.style.color = 'red';
      return;
    }
  
    // Email Validation: Check for the presence of "@" symbol
    if (!email.includes('@') || !email.includes('.')) {
      statusDiv.textContent = 'Please enter a valid email address if you want to continue.';
      statusDiv.style.color = 'red';
      return;
    }
  
    // Simulate Submission Success
    statusDiv.textContent = 'Thank you for your message! We will get back to you soon.';
    statusDiv.style.color = 'green';
  
    // Clear Form
    document.getElementById('contact-form').reset();
  });