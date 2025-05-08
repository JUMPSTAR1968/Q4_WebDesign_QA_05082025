document.addEventListener('DOMContentLoaded', function() {

    // Active Navigation Link
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('header nav ul li a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
        }
    }

    // Product Card Animation on Scroll (simple version)
    // For a more robust solution, use Intersection Observer API
    const productCards = document.querySelectorAll('.product-card');
    let delay = 0;
    productCards.forEach(card => {
        card.style.animationDelay = `${delay}s`;
        delay += 0.1; // Stagger the animation
    });


    // Sign Up Form Validation
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        const messageDiv = document.getElementById('formMessage');

        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual submission for this demo
            messageDiv.innerHTML = ''; // Clear previous messages
            messageDiv.className = 'form-message'; // Reset class

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            let errors = [];

            if (name === '') {
                errors.push('Name is required.');
            }
            if (email === '') {
                errors.push('Email is required.');
            } else if (!isValidEmail(email)) {
                errors.push('Invalid email format.');
            }
            if (password === '') {
                errors.push('Password is required.');
            } else if (password.length < 6) {
                errors.push('Password must be at least 6 characters long.');
            }
            if (confirmPassword === '') {
                errors.push('Confirm Password is required.');
            } else if (password !== confirmPassword) {
                errors.push('Passwords do not match.');
            }

            if (errors.length > 0) {
                messageDiv.classList.add('error');
                messageDiv.innerHTML = '<ul>' + errors.map(err => `<li>${err}</li>`).join('') + '</ul>';
            } else {
                messageDiv.classList.add('success');
                messageDiv.textContent = 'Sign up successful! (This is a demo)';
                signupForm.reset(); // Clear the form
            }
        });
    }

    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

});