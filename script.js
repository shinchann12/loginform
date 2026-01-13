document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    // Validation
    if (email === "" || password === "") {
        alert("All fields are required!");
        return;
    }

    // Email format validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Password length validation
    if (password.length < 4) {
        alert("Password must be at least 4 characters long!");
        return;
    }

    // Success message
    alert("Login successful!");
});
