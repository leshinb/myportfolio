document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const contactForm = document.getElementById('contact-form');
    const formNotification = document.getElementById('form-notification');

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        this.reset(); //clears the text boxes after submittting
        formNotification.textContent = 'Thank you for your message!';
        formNotification.style.display = 'block';

        // Hide the notification after 3 seconds
        setTimeout(function() {
            formNotification.style.display = 'none';
        }, 3000); // 3000 milliseconds = 3 seconds
    });
});