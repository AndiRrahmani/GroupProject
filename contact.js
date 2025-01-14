document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); Submission

    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const message = document.getElementById("Message").value;

    if (name && email && message) {
        alert("Thank you for reaching out, On Audi Quattro " + name + "! We will get back to you shortly.");
    } else {
        alert("Please fill in all fields before submitting on Audi Quattro Sport.");
    }

    document.getElementById("contact-form").reset();
});