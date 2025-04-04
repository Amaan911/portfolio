var typed = new Typed(".text", {
    strings: ["Software Engineer", "Data Analyst", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize EmailJS with your Public Key
    emailjs.init("-6WGq7rP9IyMxgpl2"); // Replace with your actual EmailJS Public Key

    // Select the button and add an event listener
    document.getElementById("send-message").addEventListener("click", function (event) {
        event.preventDefault(); // ✅ Prevent page reload

        // Get form values
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        // Check if all fields are filled
        if (!name || !email || !subject || !message) {
            alert("Please fill in all fields!");
            return;
        }

        // Prepare email parameters
        let params = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send("service_c9ttt84", "template_9xnz5ph", params)
            .then(function (response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset(); // ✅ Reset form after submission
            })
            .catch(function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            });
    });
});




